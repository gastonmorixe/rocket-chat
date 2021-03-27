import * as React from "react"
import {
  split,
  HttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloProviderOriginal,
} from "@apollo/client"
import { getMainDefinition } from "@apollo/client/utilities"
import * as ActionCable from "@rails/actioncable"
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink"

ActionCable.logger.enabled = true

const hasSubscriptionOperation = ({ query }) => {
  const definition = getMainDefinition(query)
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  )
}

const httpLink = new HttpLink({
  uri: "/graphql",
})
const cable = ActionCable.createConsumer("/ws")
const acLink = new ActionCableLink({ cable })
const link = split(hasSubscriptionOperation, acLink, httpLink)

const client = new ApolloClient({
  // uri: "/graphql",
  link,
  credentials: "include",
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
