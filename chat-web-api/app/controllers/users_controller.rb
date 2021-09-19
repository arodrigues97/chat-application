class UsersController < ApplicationController
    
    def index
       users = User.all
        json_response(users)
    end 

    def show
        user = User.find_by!(id: params[:id])
        json_response(user)
    end
    
    def create
       user = User.create!(user_params)
        json_response(user)
    end 

    def user_params
        params.permit(:name)
    end
    
end
