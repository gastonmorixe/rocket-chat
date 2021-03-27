class Subscriptions::NewMessage < Subscriptions::BaseSubscription

  payload_type ::Types::MessageType
  description "Get New Realtime Messages of a Channel given a Channel name"
  argument :channel_name, ID, required: true
    
  # def subscribe(channel_name:)
  #   # console.log("")
  #   Rails.logger.info "[NewMessage] [subscribe] #{channel_name}"
  #   # ...
  # end

  # def update(channel_name:)
  #   Rails.logger.info "[NewMessage] [update] #{channel_name}"
  #   # ...
  # end
end
