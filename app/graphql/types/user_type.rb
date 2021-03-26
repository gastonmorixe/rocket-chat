class Types::UserType < Types::BaseObject
    field :id, ID, null: false
    field :nickname, String, null: false
    # field :avatar, Types::PhotoType, null: true
end
