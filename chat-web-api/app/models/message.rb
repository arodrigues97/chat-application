class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel
  
  def as_json(options={})
      {
        id: id,
        message: message,
        timeStamp: created_at,
        channelId: channel_id,
        user: {
          id: user.id,
          name: user.name
        }
      }
  end
end
