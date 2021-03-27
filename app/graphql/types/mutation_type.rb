module Types
  class MutationType < Types::BaseObject

    field :create_message, Types::MessageType, null: false do
      description "Post a message in a Channel"
      argument :local_id, ID, required: true
      argument :channel_name, String, required: true
      argument :content, String, required: true
      argument :nickname, ID, required: true
    end    

    def create_message(channel_name:, content:, nickname:, local_id:)
      CreateMessage.run!(
        local_id: local_id,
        channel_name: channel_name,
        content: content,
        nickname: nickname
      )
    end
  end
end
