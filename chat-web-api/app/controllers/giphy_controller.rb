class GiphyController < ApplicationController

   def suggestion
    api_key = "2OoyTb9w4RJnxcEhrdK4BBdUH10AIbe7"
    response = RestClient.get(
      "https://api.giphy.com/v1/gifs/search?api_key=#{api_key}&q=#{params["search"]}&limit=20&offset=0&rating=G&lang=en"
    )
    json_response(response)
   end

end
