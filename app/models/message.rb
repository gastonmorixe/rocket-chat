class Message
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :content, type: String
  field :local_id, type: String
  
  embedded_in :channel
  belongs_to :created_by, class_name: "User"
  
  validates :content, presence: true
end
