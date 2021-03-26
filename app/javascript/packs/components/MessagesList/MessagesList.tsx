import * as React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"

import { Message } from "../Message"

import MessageListQuery from "./MessageListQuery.graphql"

interface IMessagesList {
  nickname: string
}

export const MessagesList = React.memo<IMessagesList>((props) => {
  console.log(`[MessageList]`, { query })

  const { nickname } = props
  const query = useQuery(MessageListQuery, {
    variables: { channelName: "general" },
  })

  if (query.loading) {
    return <MessagesListWrapper>Loading messages...</MessagesListWrapper>
  }

  return (
    <MessagesListWrapper>
      {query.data.messagesForChannel.map((message) => {
        const isMine = nickname === message.createdBy.nickname
        return (
          <Message
            key={message.id}
            content={message.content}
            createdAt={new Date(message.createdAt).valueOf()}
            authorNickname={message.createdBy.nickname}
            {...{ isMine }}
          />
        )
      })}
    </MessagesListWrapper>
  )
})

MessagesList.displayName = "MessagesList"

const MessagesListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 1rem;
  }
`
