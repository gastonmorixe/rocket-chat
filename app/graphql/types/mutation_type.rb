module Types
  class MutationType < Types::BaseObject

    field :create_message, Types::MessageType, null: false do
      description "Post a message in a Channel"
      argument :channel_name, String, required: true
      argument :content, String, required: true
      argument :nickname, String, required: true
    end    

    def create_message(channel_name:, content:, nickname:)
      CreateMessage.run!(
        channel_name: channel_name,
        content: content,
        nickname: nickname
      )
    end
  end
end
