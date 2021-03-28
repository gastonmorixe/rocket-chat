class Subscriptions::UserTypingForChannel < Subscriptions::BaseSubscription

  payload_type ::Types::TypingType
  description "Get realtime typing indicator of a user of a channel given a channel name"
  argument :channel_name, String, required: true
  
  def subscribe(channel_name:)
    Rails.logger.info "[UserTypingForChannel] [subscribe] #{channel_name}"
    # authorize, etc ...
    # Return the room in the initial response
    # {
    #   room: room
    # }
    super
  end

  def update(channel_name:)
    Rails.logger.info "[UserTypingForChannel] [update] #{channel_name}"
    super
  end
end
