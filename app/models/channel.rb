class Channel
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :name, type: String
  
  embeds_many :messages
  
  index({ name: 1 }, { unique: true })
  
  validates :name, presence: true
end
