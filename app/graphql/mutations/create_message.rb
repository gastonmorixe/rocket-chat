class Mutations::CreateMessage < Mutations::BaseMutation
  null false

  payload_type ::Types::MessageType

  description "Post a message in a Channel"

  argument :local_id, ID, required: true
  argument :content, String, required: true
  argument :channel_name, String, required: true
  argument :nickname, String, required: true

  def resolve(channel_name:, content:, nickname:, local_id:)
    CreateMessageInteractor.run!(
      local_id: local_id,
      channel_name: channel_name,
      content: content,
      nickname: nickname
    )
  end
end