class ChannelJoined < ApplicationRecord
  belongs_to :channel
  belongs_to :user

  validates_presence_of :user_id
  validates_presence_of :channel_id
end
