import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Providers } from "../../providers"
import { Channel } from "../Channel"
import { Join } from "../Join"

interface IChatApp {}

export const ChatApp = React.memo<IChatApp>((props) => {
  return (
    <Providers>
      <BrowserRouter>
        <Switch>
          <Route path="/c/:channelName/u/:nickname" component={Channel} exact />
          <Route component={Join} />
        </Switch>
      </BrowserRouter>
    </Providers>
  )
})

ChatApp.displayName = "ChatApp"
