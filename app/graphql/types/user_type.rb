class Types::UserType < Types::BaseObject
    field :id, ID, null: false
    field :nickname, ID, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
end
