class Message
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :content, type: String
  
  belongs_to :created_by, class_name: "User"
  belongs_to :channel
end
