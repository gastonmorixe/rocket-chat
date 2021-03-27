class CreateMessage < ActiveInteraction::Base
  string :content
  string :channel_name
  string :nickname
  string :local_id

  validates :content,
    presence: true
  validates :channel_name,
    presence: true
  validates :nickname,
    presence: true
  validates :local_id,
    presence: true

  def execute
    channel = Channel.find_or_create_by(name: channel_name)
    created_by = User.find_or_create_by(nickname: nickname)
    new_message = channel.messages.create(
      content: content,
      created_by: created_by,
      local_id: local_id
    )

    # Send to GraphQL Subscriptions for real-time updates
    RocketSchema.subscriptions.trigger(
      :new_message,
      {
        channel_name: channel_name
      },
      new_message
    )

    new_message
  end
end


