/**
 * Generated at 2021-03-28T15:29:52.260Z
 */

/**
 * ```gql
 * subscription NewMessage($channelName: String!) {
 *   newMessage(channelName: $channelName) {
 *     id
 *     localId
 *     content
 *     createdAt
 *     channel {
 *       name
 *     }
 *     createdBy {
 *       nickname
 *     }
 *   }
 * }
 * ```
 */
declare const _ = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":210,"source":{"body":"subscription NewMessage($channelName: String!) {\n  newMessage(channelName: $channelName) {\n    id\n    localId\n    content\n    createdAt\n    channel {\n      name\n    }\n    createdBy {\n      nickname\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;
export default _;

/**
 * ```gql
 * subscription NewMessage($channelName: String!) {
 *   newMessage(channelName: $channelName) {
 *     id
 *     localId
 *     content
 *     createdAt
 *     channel {
 *       name
 *     }
 *     createdBy {
 *       nickname
 *     }
 *   }
 * }
 * ```
 */
export const NewMessage = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":210,"source":{"body":"subscription NewMessage($channelName: String!) {\n  newMessage(channelName: $channelName) {\n    id\n    localId\n    content\n    createdAt\n    channel {\n      name\n    }\n    createdBy {\n      nickname\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;

