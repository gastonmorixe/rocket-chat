import * as React from "react"
import styled from "styled-components"
import { useMutation } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"
import throttle from "lodash/throttle"

import { useSetUserIsTyping } from "../TypingIndicator"

import CreateMessageMutation from "./CreateMessageMutation.graphql"
import MessagesForChannelQuery from "../MessagesList/MessagesForChannelQuery.graphql"

interface INewMessageInput {
  nickname: string
  channelName: string
}

const useNewMessageLogic = (options: INewMessageInput) => {
  const { channelName, nickname } = options

  const [createMessage, result] = useMutation(CreateMessageMutation, {})
  const setUserIsTyping = useSetUserIsTyping({ nickname, channelName })

  const setUserIsTypingThrottled = React.useMemo(() => {
    console.log(`[NewMessageInput] #setUserIsTypingThrottled`)
    const cb = () => {
      console.log(`[NewMessageInput] #setUserIsTypingThrottled #cb`)
      setUserIsTyping()
    }
    return throttle(cb, 1000, { leading: true, trailing: false })
  }, [setUserIsTyping])

  const onInput = React.useCallback((ev) => {
    console.log("[NewMessageInput] #onInput")
    setUserIsTypingThrottled()
  }, [])

  const onSubmit = React.useCallback((ev) => {
    ev.preventDefault()
    const messageInput = ev.target.elements[0]
    const content = messageInput.value
    messageInput.value = ""

    const localId = uuidv4()

    createMessage({
      variables: {
        channelName,
        content,
        nickname,
        localId,
      },
      optimisticResponse: {
        __typename: "Mutation",
        createMessage: {
          __typename: "Message",
          id: `${Date.now()}_local`,
          localId,
          content,
          createdAt: new Date().toISOString(),
          createdBy: {
            __typename: "User",
            nickname,
          },
          channel: {
            __typename: "Channel",
            name: channelName,
          },
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

  return { onSubmit, onInput }
}

export const NewMessageInput = React.memo<INewMessageInput>((props) => {
  console.log(`[NewMessageInput]`, { props })

  const { onSubmit, onInput } = useNewMessageLogic(props)

  return (
    <NewMessageInputWrapper>
      <form {...{ onSubmit }}>
        <input type="text" placeholder="Type a message..." {...{ onInput }} />
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
    -webkit-appearance: none;
    appearance: none;

    &::placeholder {
      font-size: 1rem;
    }

    &:focus {
      outline: none;
    }
  }
`
