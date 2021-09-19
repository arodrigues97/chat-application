class UsersController < ApplicationController

    #Searches for a user by the name
    def search
        user = User.where("name LIKE ?", "#{params[:name]}")
        json_response(user)
    end

    
end
