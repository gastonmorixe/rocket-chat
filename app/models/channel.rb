class Channel
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :name, type: String
  
  has_many :messages

  index({ name: 1 }, { unique: true })
end
