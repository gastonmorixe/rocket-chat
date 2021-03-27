/**
 * Generated at 2021-03-27T00:35:52.940Z
 */

/**
 * ```gql
 * query MessagesForChannel($channelName: String!) {
 *   messagesForChannel(channelName: $channelName) {
 *     id
 *     content
 *     createdAt
 *     createdBy {
 *       id
 *       nickname
 *     }
 *     channel {
 *       id
 *       name
 *     }
 *   }
 * }
 * ```
 */
declare const _ = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MessagesForChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messagesForChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":225,"source":{"body":"query MessagesForChannel($channelName: String!) {\n  messagesForChannel(channelName: $channelName) {\n    id\n    content\n    createdAt\n    createdBy {\n      id\n      nickname\n    }\n    channel {\n      id\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;
export default _;

/**
 * ```gql
 * query MessagesForChannel($channelName: String!) {
 *   messagesForChannel(channelName: $channelName) {
 *     id
 *     content
 *     createdAt
 *     createdBy {
 *       id
 *       nickname
 *     }
 *     channel {
 *       id
 *       name
 *     }
 *   }
 * }
 * ```
 */
export const MessagesForChannel = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MessagesForChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messagesForChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":225,"source":{"body":"query MessagesForChannel($channelName: String!) {\n  messagesForChannel(channelName: $channelName) {\n    id\n    content\n    createdAt\n    createdBy {\n      id\n      nickname\n    }\n    channel {\n      id\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;
