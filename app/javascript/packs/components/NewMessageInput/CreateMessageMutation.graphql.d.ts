/**
 * Generated at 2021-03-27T00:35:45.360Z
 */

/**
 * ```gql
 * mutation CreateMessage(
 *   $channelName: String!
 *   $content: String!
 *   $nickname: String!
 * ) {
 *   createMessage(
 *     channelName: $channelName
 *     content: $content
 *     nickname: $nickname
 *   ) {
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
declare const _ = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":317,"source":{"body":"mutation CreateMessage(\n  $channelName: String!\n  $content: String!\n  $nickname: String!\n) {\n  createMessage(\n    channelName: $channelName\n    content: $content\n    nickname: $nickname\n  ) {\n    id\n    content\n    createdAt\n    createdBy {\n      id\n      nickname\n    }\n    channel {\n      id\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;
export default _;

/**
 * ```gql
 * mutation CreateMessage(
 *   $channelName: String!
 *   $content: String!
 *   $nickname: String!
 * ) {
 *   createMessage(
 *     channelName: $channelName
 *     content: $content
 *     nickname: $nickname
 *   ) {
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
export const CreateMessage = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":317,"source":{"body":"mutation CreateMessage(\n  $channelName: String!\n  $content: String!\n  $nickname: String!\n) {\n  createMessage(\n    channelName: $channelName\n    content: $content\n    nickname: $nickname\n  ) {\n    id\n    content\n    createdAt\n    createdBy {\n      id\n      nickname\n    }\n    channel {\n      id\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;

