class Channel < ApplicationRecord
  belongs_to :user
  has_many :message

  validates_presence_of :user_id
  validates_presence_of :name

  #Returns the channel in a json format including the user owner and message history of the channel
  def as_json(options={})
    {
      id: id,
      name: name,
      createdAt: created_at,
      active: active,
      owner: {
        id: user.id,
        name: user.name
      },
      messages: message
    }
end
end
