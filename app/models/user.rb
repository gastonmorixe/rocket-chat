class User
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :nickname, type: String
  
  index({ nickname: 1 }, { unique: true })

  validates :nickname, presence: true
end
