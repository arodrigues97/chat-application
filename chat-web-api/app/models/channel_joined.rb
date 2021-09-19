class ChannelJoined < ApplicationRecord
  belongs_to :channel
  belongs_to :user

  validates_presence_of :user_id
  validates_presence_of :channel_id

  def as_json(options={})
    {
      id: id,
      userId: user_id,
      channeId: channel_id,
      user: user
    }
  end
end
