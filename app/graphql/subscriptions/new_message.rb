class Subscriptions::NewMessage < Subscriptions::BaseSubscription

  payload_type ::Types::MessageType
  description "Get New Realtime Messages of a Channel given a Channel name"
  argument :channel_name, String, required: true
  
  def subscribe(channel_name:)
    Rails.logger.info "[NewMessage] [subscribe] #{channel_name}"
    # authorize, etc ...
    # Return the room in the initial response
    # {
    #   room: room
    # }
    super
  end

  def update(channel_name:)
    Rails.logger.info "[NewMessage] [update] #{channel_name}"
    super
  end
end
