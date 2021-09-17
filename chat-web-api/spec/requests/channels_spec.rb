require 'rails_helper'

describe "Channels API", type: :request do

  

    describe 'GET /active_channels' do
        
        it 'returns active channels only' do

            #Create users to own channels
            FactoryBot.create(:user, name: "Adam Rodrigues")
            FactoryBot.create(:user, name: "Ankit Kanoji")

            #Create two channels, one in an active state one not
            FactoryBot.create(:channel, id: 1, name: "Active Channel", active: true, user_id: 1)
            FactoryBot.create(:channel, id: 2, name: "Unactive Channel", active: false, user_id: 2)
            
            #Get the list of active channels
            get '/active_channels'
            
            #Assert success & active channel list to only be size one
            expect(response).to have_http_status(:success)
            expect(JSON.parse(response.body).size).to eq(1)

            #To be super sure let's make sure the active status in the responses are true!
           expect(JSON.parse(response.body)[0]['active']).to eq(true)
            
            
        end
        
    end
end