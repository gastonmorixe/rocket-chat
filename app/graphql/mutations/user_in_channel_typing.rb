class Mutations::UserInChannelTyping < Mutations::BaseMutation
  null false

  payload_type ::Types::TypingType

  description "Send typing status of a user in a channel"

  argument :channel_name, String, required: true
  argument :nickname, String, required: true

  def resolve(channel_name:, nickname:)
    UserInChannelTypingInteractor.run!(
      channel_name: channel_name,
      nickname: nickname
    )
  end
end
