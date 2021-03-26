import * as React from "react"
import styled from "styled-components"
import { useMutation } from "@apollo/client"

import CreateMessageMutation from "./CreateMessageMutation.graphql"

interface INewMessageInput {
  nickname: string
  channelName: string
}

export const NewMessageInput = React.memo<INewMessageInput>((props) => {
  console.log(`[NewMessageInput]`, { props })

  const { channelName, nickname } = props
  const [createMessage, result] = useMutation(CreateMessageMutation)

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
