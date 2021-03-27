class Types::ChannelType < Types::BaseObject
  field :id, ID, null: false
  field :name, ID, null: false
  field :messages, [Types::MessageType], null: true
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :messages_count, Int, null: false

  def messages_count
    object.messages.count
  end
end
