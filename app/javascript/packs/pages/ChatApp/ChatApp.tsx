import * as React from "react"

import { Providers } from "../../providers/Providers"
import { MessagesList } from "../../components/"

interface IChatApp {}

export const ChatApp = React.memo<IChatApp>((props) => {
  return (
    <Providers>
      <h1>Rocket Chat!</h1>
      <MessagesList nickname="gaston" />
    </Providers>
  )
})

ChatApp.displayName = "ChatApp"
