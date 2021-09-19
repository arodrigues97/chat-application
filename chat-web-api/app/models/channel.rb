class Channel < ApplicationRecord
  belongs_to :user
  has_many :message
  has_many :channel_joined

  validates_presence_of :user_id
  validates_presence_of :name

  #channel_joined.map{|j| [j.user_id,]}
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
      messages: message,
      users: channel_joined.map{|j| j.user}
    }
end
end
