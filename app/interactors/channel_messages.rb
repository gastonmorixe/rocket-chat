class ChannelMessages < ActiveInteraction::Base
  string :channel_name

  validates :channel_name,
    presence: true

  def execute
    # includes(:messages)
    channel = Channel.find_or_create_by(name: channel_name)
    channel.messages
  end
end
