import * as React from "react"
import styled from "styled-components"
import { useMutation } from "@apollo/client"

import CreateMessageMutation from "./CreateMessageMutation.graphql"
import MessagesForChannelQuery from "../MessagesList/MessagesForChannelQuery.graphql"

interface INewMessageInput {
  nickname: string
  channelName: string
}

export const NewMessageInput = React.memo<INewMessageInput>((props) => {
  console.log(`[NewMessageInput]`, { props })

  const { channelName, nickname } = props
  const [createMessage, result] = useMutation(CreateMessageMutation, {})

  const onSubmit = React.useCallback((ev) => {
    ev.preventDefault()
    const messageInput = ev.target.elements[0]
    const content = messageInput.value
    messageInput.value = ""

    createMessage({
      variables: {
        channelName,
        content,
        nickname,
      },
      optimisticResponse: {
        __typename: "Mutation",
        createMessage: {
          __typename: "Message",
          // createdBy: { nickname },
          // channel: { name: channelName },
          // createdAt: new Date(),
          content,
        },
      },
      update: (proxy, { data: { createMessage } }) => {
        // Read the data from our cache for this query.
        const data = proxy.readQuery({
          query: MessagesForChannelQuery,
          variables: { channelName },
        })
        // Write our data back to the cache with the new comment in it
        console.log(`[NewMessageInput]`, { data, createMessage })
        proxy.writeQuery({
          query: MessagesForChannelQuery,
          variables: { channelName },
          data: {
            ...data,
            messagesForChannel: [...data.messagesForChannel, createMessage],
          },
        })
      },
    })
  }, [])

  return (
    <NewMessageInputWrapper>
      <form {...{ onSubmit }}>
        <input type="text" placeholder="Type a message..." />
      </form>
    </NewMessageInputWrapper>
  )
})

NewMessageInput.displayName = "NewMessageInput"

const NewMessageInputWrapper = styled.div<{
  isMine: boolean
  isPrevMine: boolean
}>``
