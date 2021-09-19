describe "Giphy API", type: :request do

    describe '/GET giphy/suggestion' do

        before {
            get '/giphy/suggestion'
        }

        it 'should return success response' do
            expect(response).to have_http_status(200)
        end
    end
end