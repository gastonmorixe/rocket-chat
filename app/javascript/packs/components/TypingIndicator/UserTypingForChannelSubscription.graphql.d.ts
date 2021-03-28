/**
 * Generated at 2021-03-28T16:29:54.747Z
 */

/**
 * ```gql
 * subscription UserTypingForChannelSubscription($channelName: String!) {
 *   userTypingForChannel(channelName: $channelName) {
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
declare const _ = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserTypingForChannelSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userTypingForChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTime"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":210,"source":{"body":"subscription UserTypingForChannelSubscription($channelName: String!) {\n  userTypingForChannel(channelName: $channelName) {\n    dateTime\n    createdBy {\n      nickname\n    }\n    channel {\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;
export default _;

/**
 * ```gql
 * subscription UserTypingForChannelSubscription($channelName: String!) {
 *   userTypingForChannel(channelName: $channelName) {
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
export const UserTypingForChannelSubscription = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserTypingForChannelSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userTypingForChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelName"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTime"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":210,"source":{"body":"subscription UserTypingForChannelSubscription($channelName: String!) {\n  userTypingForChannel(channelName: $channelName) {\n    dateTime\n    createdBy {\n      nickname\n    }\n    channel {\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}} as const;

