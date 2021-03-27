class Types::SubscriptionType < Types::BaseObject
  extend GraphQL::Subscriptions::SubscriptionRoot

  field :new_message, subscription: Subscriptions::NewMessage
end
  