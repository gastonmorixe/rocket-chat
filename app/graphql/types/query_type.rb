module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # field :test_field, String, null: false,
    #   description: "An example field added by the generator"
    # def test_field
    #   "Hello World!"
    # end

    field :user, UserType, null: true do
      description "Find a user by ID"
      argument :id, ID, required: true
    end
  
    # Then provide an implementation:
    def user(id:)
      User.find(id)
    end
  
  end
end
