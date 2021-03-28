/**
 * Generated at 2021-03-28T17:02:08.949Z
 */

/**
 * ```gql
 * mutation UserInChannelTypingMutation(
 *   $channelName: String!
 *   $nickname: String!
 * ) {
 *   userInChannelTyping(
 *     input: { channelName: $channelName, nickname: $nickname }
 *   ) {
 *     dateTime
 *     createdBy {
 *       nickname
 *     }
 *     channel {
 *       name
 *     }
 *   }
 * }
 * ```
 */
declare const _ = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserInChannelTypingMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userInChannelTyping"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTime"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":265,"source":{"body":"mutation UserInChannelTypingMutation(\n  $channelName: String!\n  $nickname: String!\n) {\n  userInChannelTyping(\n    input: { channelName: $channelName, nickname: $nickname }\n  ) {\n    dateTime\n    createdBy {\n      nickname\n    }\n    channel {\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;
export default _;

/**
 * ```gql
 * mutation UserInChannelTypingMutation(
 *   $channelName: String!
 *   $nickname: String!
 * ) {
 *   userInChannelTyping(
 *     input: { channelName: $channelName, nickname: $nickname }
 *   ) {
 *     dateTime
 *     createdBy {
 *       nickname
 *     }
 *     channel {
 *       name
 *     }
 *   }
 * }
 * ```
 */
export const UserInChannelTypingMutation = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserInChannelTypingMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userInChannelTyping"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTime"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":265,"source":{"body":"mutation UserInChannelTypingMutation(\n  $channelName: String!\n  $nickname: String!\n) {\n  userInChannelTyping(\n    input: { channelName: $channelName, nickname: $nickname }\n  ) {\n    dateTime\n    createdBy {\n      nickname\n    }\n    channel {\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;

