import * as React from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloProviderOriginal,
} from "@apollo/client"

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
})

export const ApolloProvider: React.FC = (props) => {
  const { children } = props
  return (
    <ApolloProviderOriginal {...{ client }}>{children}</ApolloProviderOriginal>
  )
}
