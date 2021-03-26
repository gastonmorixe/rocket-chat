import * as React from "react"
import styled from "styled-components"
import dayjs from "dayjs"

interface IMessage {
  content: string
  authorNickname: string
  createdAt: number
  isMine: boolean
}

export const Message = React.memo<IMessage>((props) => {
  console.log(`[Message]`, { props })

  const { content, authorNickname, createdAt, isMine } = props

  const dateFromNow = dayjs(createdAt).fromNow()
  return (
    <MessageWrapper {...{ isMine }}>
      <div className="content">{content}</div>
      <div className="author">{authorNickname}</div>
      <div className="created-at">{dateFromNow}</div>
    </MessageWrapper>
  )
})

Message.displayName = "Message"

const MessageWrapper = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column;

  .content {
    background-color: ${(p) =>
      p.isMine ? "rgb(48, 126, 246)" : "rgb(93,200,90))"};
    padding: 0.5rem;
    border-radius: 10px;
    color: white;
    align-self: ${(p) => (p.isMine ? "flex-start" : "flex-end")};
  }

  .author {
    font-size: 0.75rem;
  }

  .created-at {
    font-size: 0.75rem;
  }
`
