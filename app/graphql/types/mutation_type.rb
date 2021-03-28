module Types
  class MutationType < Types::BaseObject
    field :create_message, mutation: Mutations::CreateMessage
    field :user_in_channel_typing, mutation: Mutations::UserInChannelTyping
  end
end
