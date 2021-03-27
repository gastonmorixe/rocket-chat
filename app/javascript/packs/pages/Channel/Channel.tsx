import * as React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

import { MessagesList, NewMessageInput } from "../../components"

interface IChannel {
  channelName: string
}

export const Channel = React.memo<IChannel>((props) => {
  const params = useParams<{ channelName: string; nickname: string }>()

  const { nickname, channelName } = params

  if (!channelName || !nickname) {
    return <div>Missing channel or nickname</div>
  }

  return (
    <ChannelWrapper>
      <ChannelTitle>{channelName}</ChannelTitle>
      <MessagesListWrapper>
        <MessagesList {...{ nickname, channelName }} />
      </MessagesListWrapper>
      <NewMessageInput {...{ nickname, channelName }} />
    </ChannelWrapper>
  )
})

Channel.displayName = "Channel"

const ChannelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  max-height: 100%;
`

const ChannelTitle = styled.h2`
  display: flex;
  padding: 1rem 1.5rem;
  margin: 0;
`

const MessagesListWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`
