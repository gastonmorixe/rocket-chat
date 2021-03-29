import * as React from "react"
import styled from "styled-components"

interface ILogin {
  channelName: string
}

export const Login = React.memo<ILogin>((props) => {
  return (
    <LoginWrapper>
      <h1>Login</h1>
    </LoginWrapper>
  )
})

Login.displayName = "Login"

const LoginWrapper = styled.div``
