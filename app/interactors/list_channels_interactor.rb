class ListChannelsInteractor < ActiveInteraction::Base
  def execute
    Channel.all
  end
end
