class Types::TypingType < Types::BaseObject
  # field :id, ID, null: false
  field :channel, Types::ChannelType, null: false
  field :created_by, Types::UserType, null: false
  field :date_time, GraphQL::Types::ISO8601DateTime, null: false

  # def id 
  #   channel.name + created_by.nickname + date_time.to_i
  # end
end
