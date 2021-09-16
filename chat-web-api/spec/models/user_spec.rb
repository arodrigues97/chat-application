require 'rails_helper'

RSpec.describe User, type: :model do
  #Ensure user has a 1:m relationship with the Channel model
  # it {should have_many(:channels).dependent(:destroy)}

  # it {should validate_presence_of(:name)}
end
