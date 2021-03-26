import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Providers } from "../../providers"
import { Channel } from "../Channel"
import { Login } from "../Login"

interface IChatApp {}

export const ChatApp = React.memo<IChatApp>((props) => {
  return (
    <Providers>
      <BrowserRouter>
        <Switch>
          <Route
            path="/channel/:nickname/:channelName"
            component={Channel}
            exact
          />
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
    </Providers>
  )
})

ChatApp.displayName = "ChatApp"
