class Types::MessageType < Types::BaseObject
    field :id, ID, null: false
    field :content, String, null: false
    field :channel, Types::ChannelType, null: false
    field :created_by, Types::UserType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
end
