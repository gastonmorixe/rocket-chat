module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    #
    # Channels 
    # 

    field :channels, [Types::ChannelType], null: true do
      description "List all Channels"
    end

    def channels
      ListChannelsInteractor.run!
    end

    #
    # Messages 
    # 

    field :messages_for_channel, [Types::MessageType], null: true do
      description "Get Messages of a Channel given a Channel name"
      argument :channel_name, String, required: true
    end
  
    def messages_for_channel(channel_name:)
      ChannelMessagesInteractor.run!(channel_name: channel_name)
    end

  end
end
