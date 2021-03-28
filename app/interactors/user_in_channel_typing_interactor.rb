class UserInChannelTypingInteractor < ActiveInteraction::Base
  string :channel_name
  string :nickname

  validates :channel_name,
    presence: true
  validates :nickname,
    presence: true

  def execute
    channel = Channel.find_or_create_by(name: channel_name)
    created_by = User.find_or_create_by(nickname: nickname)

    typing_obj = { 
      # This obj needs to be serializable
      date_time: Time.now,
      created_by: {
        nickname: nickname,
      },
      channel: {
        name: channel_name,
      },
    }

    # Send to GraphQL Subscriptions for real-time updates
    RocketSchema.subscriptions.trigger(
      :user_typing_for_channel,
      {
        channel_name: channel_name
      },
      typing_obj
    )

    typing_obj
  end
end
