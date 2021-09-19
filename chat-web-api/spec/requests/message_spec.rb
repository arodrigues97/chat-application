require 'rails_helper'

#Test cases for the messages api
describe "Messages API", type: :request do

    #Persist message to a channel the user has joined
    #Checks also for persisting to a channel the user has not joined
    it 'validation if channel is not joined' do
        #Create a user
        FactoryBot.create(:user, id: 1, name: "Adam Rodrigues")
        FactoryBot.create(:user, id: 2, name: "Ankit Kanojia")

        #Create two channels
        FactoryBot.create(:channel, id: 1, name: "Test Channel", user_id: 1)
        FactoryBot.create(:channel, id: 2, name: "Test Channel 2", user_id: 2)

        #Join user  #1 to channel 2
        FactoryBot.create(:channel_joined, user_id: 1, channel_id: 2)

        #Successfull post for user #1
         post '/messages', :params =>  {
             "user_id": "1",
             "channel_id": "2",
             "message": "Hello!"
         }

         #Assert successfully response
        expect(response).to have_http_status(:success)

        #Lets make sure the newely added post is there
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

    describe 'PUT /messages/:id' do

        edit_message = "New Message"

        before {
            user = FactoryBot.create(:user_random)
            channel = FactoryBot.create(:channel_random, user_id: user.id, active: true)
            FactoryBot.create(:channel_joined, user_id: user.id, channel_id: channel.id)
            message = FactoryBot.create(:message_random, user_id: user.id, channel_id: channel.id)
            put "/messages/#{message.id}", :params => {
                "user_id": user.id,
                "channel_id": channel.id,
                "message": edit_message
            }
            @json = JSON.parse(response.body)
        }

        it 'returns status code 200 and not empty' do
            expect(response).to have_http_status(200)
            expect(@json).not_to be_empty
        end

        it 'return true if message updated' do
            expect(@json['message']).to eq(edit_message )
        end
    end

    #Test cases for deleting a specific message
    describe 'DELETE /messages/:id' do

        before {
            user = FactoryBot.create(:user_random)
            channel = FactoryBot.create(:channel_random, user_id: user.id, active: true)
            FactoryBot.create(:channel_joined, user_id: user.id, channel_id: channel.id)
            message = FactoryBot.create(:message_random, user_id: user.id, channel_id: channel.id)
            delete "/messages/#{message.id}"
            @json = JSON.parse(response.body)
        }

        it 'returns status code 200 and not empty' do
            expect(response).to have_http_status(200)
            expect(@json).not_to be_empty
        end

        it 'returns 404 not found after delete' do
            get "/messages/#{@json['id']}"
            expect(response).to have_http_status(404)
        end

      
    end
end

