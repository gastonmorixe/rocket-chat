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
          // id: null,
          // createdBy: { nickname },
          channel: { name: channelName },
          createdAt: new Date(),
          content,
        },
      },
      update: (proxy, { data: { createMessage } }) => {
        const data = proxy.readQuery({
          query: MessagesForChannelQuery,
          variables: { channelName },
        })

        console.log(`[NewMessageInput] #update`, { data, createMessage })

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

const NewMessageInputWrapper = styled.div`
  form {
  }

  input {
    width: 100%;
    border: 0;
    border-top: 1px solid #ddd;
    font-size: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 0;

    &::placeholder {
      font-size: 1rem;
    }

    &:focus {
      outline: none;
    }
  }
`
