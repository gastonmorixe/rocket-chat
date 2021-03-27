import * as React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"

import { Message } from "../"

import MessagesForChannelQuery from "./MessagesForChannelQuery.graphql"

interface IMessagesList {
  nickname: string
  channelName: string
}

export const MessagesList = React.memo<IMessagesList>((props) => {
  console.log(`[MessageList]`, { props })

  const { nickname, channelName } = props
  const query = useQuery(MessagesForChannelQuery, {
    variables: { channelName },
  })

  if (query.loading) {
    return <MessagesListWrapper>Loading messages...</MessagesListWrapper>
  }

  return (
    <MessagesListWrapper>
      {query.data.messagesForChannel.map((message, index, list) => {
        const isMine = nickname === message.createdBy.nickname
        const isPrevSame =
          index > 0 &&
          list[index - 1].createdBy.nickname === message.createdBy.nickname
        const isNextChange =
          index < list.length - 1 &&
          list[index + 1].createdBy.nickname !== message.createdBy.nickname
        const isLast = list.length - 1 === index
        return (
          <Message
            key={message.id}
            content={message.content}
            createdAt={new Date(message.createdAt).valueOf()}
            authorNickname={message.createdBy.nickname}
            {...{ isMine, isPrevSame, isNextChange, isLast }}
          />
        )
      })}
    </MessagesListWrapper>
  )
})

MessagesList.displayName = "MessagesList"

const MessagesListWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  height: max-content;
`
