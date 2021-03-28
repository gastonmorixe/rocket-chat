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
  isLocal: boolean
}

const CreatedAt = React.memo<{ createdAt: string }>((props) => {
  const { createdAt } = props
  const [_, setRefresh] = React.useState()

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRefresh(Date.now())
    }, 10 * 1000) // Refresh every 10 seconds
    return () => {
      clearInterval(interval)
    }
  }, [])

  const dateFromNow = dayjs(createdAt).fromNow()
  return <div className="created-at">{dateFromNow}</div>
})

CreatedAt.displayName = "CreatedAt"

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
    isLocal,
  } = props

  // const showMeta = (isPrevSame && isNextChange) || isLast
  const showMeta = isNextChange || isLast

  return (
    <MessageWrapper {...{ isMine, showMeta, isLocal }}>
      <div className="content">{content}</div>
      {showMeta && (
        <>
          <div className="author">{authorNickname}</div>
          <CreatedAt {...{ createdAt }} />
        </>
      )}
    </MessageWrapper>
  )
})

Message.displayName = "Message"

interface IMessageWrapper {
  showMeta: boolean
  isMine: boolean
  isLocal: boolean
}

const MessageWrapper = styled.div<IMessageWrapper>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(p) => (p.showMeta ? "1rem" : "0.1rem")};
  text-align: ${(p) => (p.isMine ? "right" : "left")};

  &,
  & > * {
    align-self: ${(p) => (p.isMine ? "flex-end" : "flex-start")};
  }

  .content {
    transition: opacity 0.3s ease-in-out;
    opacity: ${(p) => (p.isLocal ? "0.6" : undefined)};
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
