require 'rails_helper'

describe "Messages API", type: :request do

    it 'validation if channel is not joined' do
        #Create a user
        FactoryBot.create(:user, id: 1, name: "Adam Rodrigues")
        FactoryBot.create(:user, id: 2, name: "Ankit Kanojia")

        #Create two channels
        FactoryBot.create(:channel, id: 1, name: "Test Channel")
        FactoryBot.create(:channel, id: 2, name: "Test Channel 2")

        #Join user  #1 to channel 2
        FactoryBot.create(:channel_joined, user_id: 1, channel_id: 2)

        #Successfull post for user #1
         post '/messages', :params =>  {
             "user_id": "1",
             "channel_id": "2",
             "message": "Hello!"
         }

        expect(response).to have_http_status(:success)

        #Let's make sure the newely added post is there
        get '/messages/1'
        expect(response).to have_http_status(:success)


        #Fail post for user #2 since we haven't joined the channel yet
        post '/messages', :params =>  {
            "user_id": "2",
            "channel_id": "2",
            "message": "Hello!"
        }

        #Expect to have a 404 not found due to no channel being joined
        expect(response).to have_http_status(404)
       
    end
end