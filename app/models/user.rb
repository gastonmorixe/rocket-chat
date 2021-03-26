class User
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :nickname, type: String
  
  has_many :messages, foreign_key: 'created_by'

  index({ nickname: 1 }, { unique: true })
end
