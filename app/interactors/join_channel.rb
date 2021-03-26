class JoinChannel < ActiveInteraction::Base
    string :name

    validates :name,
        presence: true

    def execute
        Channel.find_or_create_by name: name
    end
end
