class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel

  validates_presence_of :message
  validates_presence_of :user_id
  validates_presence_of :channel_id
  
  def as_json(options={})
      {
        id: id,
        message: message,
        timeStamp: created_at.strftime("%Y-%m-%d %I:%M:%S"),
        lastEdited: updated_at.strftime("%Y-%m-%d %I:%M:%S"),
        edited: created_at != updated_at,
        channelId: channel_id,
        user: {
          id: user.id,
          name: user.name
        }
      }
  end
end
