class Types::SubscriptionType < Types::BaseObject
  field :new_message, subscription: Subscriptions::NewMessage
  field :user_typing_for_channel, subscription: Subscriptions::UserTypingForChannel
end