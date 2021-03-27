import * as React from "react"
import styled from "styled-components"
import dayjs from "dayjs"

interface IMessage {
  content: string
  authorNickname: string
  createdAt: number
  isMine: boolean
  isPrevSame: boolean
  isNextChange: boolean
  isLast: boolean
}

export const Message = React.memo<IMessage>((props) => {
  console.log(`[Message]`, { props })

  const {
    content,
    authorNickname,
    createdAt,
    isMine,
    isLast,
    isPrevSame,
    isNextChange,
  } = props

  const dateFromNow = dayjs(createdAt).fromNow()
  const showMeta = (isPrevSame && isNextChange) || isLast

  return (
    <MessageWrapper {...{ isMine, showMeta }}>
      <div className="content">{content}</div>
      {showMeta && (
        <>
          <div className="author">{authorNickname}</div>
          <div className="created-at">{dateFromNow}</div>
        </>
      )}
    </MessageWrapper>
  )
})

Message.displayName = "Message"

const MessageWrapper = styled.div<{ showMeta: boolean; isMine: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(p) => (p.showMeta ? "1rem" : "0.1rem")};
  text-align: ${(p) => (p.isMine ? "right" : "left")};

  &,
  & > * {
    align-self: ${(p) => (p.isMine ? "flex-end" : "flex-start")};
  }

  .content {
    background-color: ${(p) =>
      p.isMine ? "rgb(48, 126, 246)" : "rgb(93,200,90)"};
    padding: 0.5rem;
    border-radius: 10px;
    color: white;
    max-width: 70ch;
    margin-bottom: 0.2rem;
  }

  .author {
    color: #888;
    font-size: 0.75rem;
  }

  .created-at {
    color: #888;
    font-size: 0.75rem;
  }
`
