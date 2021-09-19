

require 'rails_helper'

#Test cases for the users API
describe 'Users API', type: :request do
    
    describe 'POST /users/search' do

        before {
            @user = FactoryBot.create(:user_random)
            post '/users/search', :params =>  {
                "name": @user.name
            }
            @json = JSON.parse(response.body)
        }

        it 'returns status code 200' do
            expect(response).to have_http_status(200)
        end

        it 'should return user on search' do
            expect(@json.first['name']).to eq(@user.name)
       end

    end

end