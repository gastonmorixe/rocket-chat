import * as React from "react"
import { ApolloProvider } from "./Apollo"

export const Providers: React.FC = (props) => {
  const { children } = props
  return <ApolloProvider>{children}</ApolloProvider>
}
