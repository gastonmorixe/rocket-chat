import * as React from "react"
import { useParams } from "react-router-dom"

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
    <>
      <h1>{channelName}</h1>
      <MessagesList {...{ nickname, channelName }} />
      <NewMessageInput {...{ nickname, channelName }} />
    </>
  )
})

Channel.displayName = "Channel"
