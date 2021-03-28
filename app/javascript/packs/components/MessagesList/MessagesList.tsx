import * as React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"

import { Message } from "../"

import MessagesForChannelQuery from "./MessagesForChannelQuery.graphql"
import NewMessageSubscription from "./NewMessageSubscription.graphql"

interface IMessagesList {
  nickname: string
  channelName: string
}

export const MessagesList = React.memo<IMessagesList>((props) => {
  console.log(`[MessageList]`, { props })

  const { nickname, channelName } = props

  const query = useQuery(MessagesForChannelQuery, {
    variables: { channelName },
    // pollInterval: 1000,
  })

  const ref = React.useRef<HTMLDivElement>()
  const messages = query?.data?.messagesForChannel

  React.useEffect(() => {
    query.subscribeToMore({
      document: NewMessageSubscription,
      variables: { channelName },
      updateQuery: (prev, options) => {
        const { subscriptionData } = options
        console.log(`[MessageList] [NewMessageSubscription2] #updateQuery`, {
          prev,
          options,
        })
        const newMessage = subscriptionData?.data?.newMessage
        if (!newMessage) return prev
        if (newMessage.createdBy.nickname === nickname) {
          return prev
        }
        const newList = {
          ...prev,
          messagesForChannel: [...prev.messagesForChannel, newMessage],
        }
        return newList
      },
    })
    return () => {
      // Unsubscribe
    }
  }, [])

  React.useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages?.length])

  if (query.loading) {
    return (
      <MessagesListWrapper>
        <MessagesListContentWrapper>
          Loading messages...
        </MessagesListContentWrapper>
      </MessagesListWrapper>
    )
  }

  return (
    <MessagesListWrapper {...{ ref }}>
      <MessagesListContentWrapper>
        {messages.map((message, index, list) => {
          const isMine = nickname === message.createdBy.nickname
          const isPrevSame =
            index > 0 &&
            list[index - 1].createdBy.nickname === message.createdBy.nickname
          const isNextChange =
            index < list.length - 1 &&
            list[index + 1].createdBy.nickname !== message.createdBy.nickname
          const isLast = list.length - 1 === index
          const isLocal = message.id.endsWith("_local")
          const key = message.localId || message.id
          return (
            <Message
              key={key}
              content={message.content}
              createdAt={new Date(message.createdAt).valueOf()}
              authorNickname={message.createdBy.nickname}
              {...{ isMine, isPrevSame, isNextChange, isLast, isLocal }}
            />
          )
        })}
      </MessagesListContentWrapper>
    </MessagesListWrapper>
  )
})

MessagesList.displayName = "MessagesList"

const MessagesListWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`

const MessagesListContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  height: max-content;
`
