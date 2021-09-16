require 'rails_helper'

RSpec.describe Message, type: :model do
 
#Association to a user & a channel
it {should belong_to(:user)}
it {should belong_to(:channel)}


#Ensures message is there

it {should validate_presence_of(:message)}
end
