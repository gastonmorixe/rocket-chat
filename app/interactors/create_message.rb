class CreateMessage < ActiveInteraction::Base
    string :content
    string :channel_name
    string :nickname

    validates :content,
        presence: true
    validates :channel_name,
        presence: true
    validates :nickname,
        presence: true

    def execute
        channel = Channel.find_or_create_by(name: channel_name)
        created_by = User.find_or_create_by(nickname: nickname)
        channel.messages.create(
            content: content,
            created_by: created_by
        )
    end
end


