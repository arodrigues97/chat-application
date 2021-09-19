require 'rails_helper'

#Test cases for the channels API
describe 'Channels API', type: :request do
    
    
    #Test cases for active channels
    describe 'GET /channels/active' do

        #Create a channel with a user assigned and set it to active
        #Create another channel and make it inactive
        before {
            user = FactoryBot.create(:user_random)
            channel = FactoryBot.create(:channel_random, user_id: user.id, active: true)
            channel2 = FactoryBot.create(:channel_random, user_id: user.id, active: false)
            get '/channels/active'
            @json = JSON.parse(response.body)
        }

        #Check to see for a successfull http response
        it 'returns http success' do
            expect(response.status).to eq(200)
        end

        #Ensure each record has an active property set to true
        it 'has active property' do
            @json.each {
                |x| expect(x['active']).to eq(true)
            }
        end

        #Return only 1 active channel in the list
        it 'return 1 active channel' do
            expect(@json.size).to eq(1)
        end
    end

    #Channel statistics test cases
    describe 'GET /channels/statistics' do
        
        #Create a channel with statistics 
        before {
            @user = FactoryBot.create(:user_random)
            channel = FactoryBot.create(:channel_random, user_id: @user.id, active: true)
            FactoryBot.create(:channel_joined, user_id: @user.id, channel_id: channel.id)
            FactoryBot.create(:message_random, user_id: @user.id, channel_id: channel.id)
            get "/channels/#{channel.id}/statistics"
            @json = JSON.parse(response.body)
        }

        #Check to see for a successfull http response
        it 'returns http success' do
            expect(response.status).to eq(200)
        end
    
        #Compare responses with what we know to be true
        it 'assert statistics' do
            expect(@json['users']).to eq(1)
            expect(@json['messages']).to eq(1)
        end

    end

    #Test cases for all channels regardless of active state
    describe 'GET /channels' do
        
        before {
            @user = FactoryBot.create(:user_random)
            channel = FactoryBot.create(:channel_random, user_id: @user.id, active: true)
            get '/channels'
            @json = JSON.parse(response.body)
        }
            
        #Check to see for a successfull http response
        it 'returns http success' do
            expect(response.status).to eq(200)
        end

        it 'should not be empty' do
            expect(@json).not_to be_empty
        end

    end

    #Test cases for retrieving a single channel
    describe 'GET /channels/:id' do
        before {
            @user = FactoryBot.create(:user_random)
            @channel = FactoryBot.create(:channel_random, user_id: @user.id, active: true)
            get "/channels/#{@channel.id}"
            @json = JSON.parse(response.body)
        } 

        context 'when the record exists' do
            
            it 'returns the channel' do
                expect(@json).not_to be_empty
                expect(@json['id']).to eq(@channel.id)
            end

            it 'returns status code 200' do
                expect(response).to have_http_status(200)
            end

            it 'returns and asserts the json structure' do
                expect(@json['id']).to eq(@channel.id)
                expect(@json['name']).to eq(@channel.name)
                expect(@json['active']).to eq(@channel.active)
                expect(@json['owner']['id']).to eq(@user.id)
                expect(@json.keys).to contain_exactly('createdAt', 'messages', 'users', 'active', 'id', 'name', 'owner')
            end
        end
 
    end

    #Create a channel
    describe 'POST /channels' do

        before {
            #Create a channel for the user
            @user = FactoryBot.create(:user_random)
            post '/channels', :params =>  {
                "user_id": @user.id,
                "channel_id": "2",
                "name": "Test Channel"
            }
            @json = JSON.parse(response.body)
        }

        #Check http status code 200 and response not to be empty
        it 'returns status code 200 and not empty' do
            expect(response).to have_http_status(200)
            expect(@json).not_to be_empty
        end

        #Upon creating a room check if the owner had a join relationship created
        it 'should join the owner to the room' do
            get "/channels/#{@json['id']}/user_joined/#{@user.id}"
            @json = JSON.parse(response.body)
            expect(@json).not_to be_empty
            expect(@json['joined']).to eq(true)
        end 
    end

    #Search for a specific channel by name
    describe 'POST /channels/search' do

        before {
            user = FactoryBot.create(:user_random)
            @channel = FactoryBot.create(:channel_random, user_id: user.id, active: true)
            post '/channels/search',  :params =>  {
                "name": @channel.name
            }
            @json = JSON.parse(response.body)
        }

        it 'returns status code 200' do
            expect(response).to have_http_status(200)
        end

        it 'should return channel on search' do
            expect(@json.first['name']).to eq(@channel.name)
       end

    end

end