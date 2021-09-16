class ChannelJoined < ApplicationRecord
  belongs_to :channel
  belongs_to :user
end
