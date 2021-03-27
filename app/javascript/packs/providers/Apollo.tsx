import * as React from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloProviderOriginal,
} from "@apollo/client"

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Channel: { keyFields: ["name"] },
      User: { keyFields: ["nickname"] },
      Message: { keyFields: ["id"] },
    },
  }),
})

export const ApolloProvider: React.FC = (props) => {
  const { children } = props
  return (
    <ApolloProviderOriginal {...{ client }}>{children}</ApolloProviderOriginal>
  )
}
