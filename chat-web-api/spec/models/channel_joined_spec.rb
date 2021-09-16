require 'rails_helper'

RSpec.describe ChannelJoined, type: :model do

  #Association tests
  it {should belong_to(:user)}
  it {should belong_to{:channel}}
end
