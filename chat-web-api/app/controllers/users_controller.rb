class UsersController < ApplicationController
    
    def index
        @users = User.all
        json_response(@users)
    end 

    def show

    end
    
    def create
        @user = User.create!(user_params)
        json_response(@user)
    end 

    def set_user
        @user = User.find(params[:id])
    end


    def user_params
        params.permit(:name)
    end
    
    

end
