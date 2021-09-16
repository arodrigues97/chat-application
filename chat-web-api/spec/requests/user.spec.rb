require 'rails_helper'

RSpec.describe 'Chat API', type :request do

    let!(:users) {create_list(:user, 10)}
    let(:user_id) {:users.first.id}

    describe 'GET /users' do

        before {get 'users'}

        it 'returns users' do
                expect(json).not_to be_empty
                expect(json.size).to eq(10)
        end
    end
end