require 'rails_helper'

describe "User API", type: :request do

    it 'returns all the users and confirm amount' do
        FactoryBot.create(:user_random)
        get '/users' 
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body).size).to eq(1)
    end
end