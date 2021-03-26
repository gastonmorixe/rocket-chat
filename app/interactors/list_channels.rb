class ListChannels < ActiveInteraction::Base
    def execute
        Channel.all
    end
end
