class MessagesController < ApplicationController



    def index

        if (params.has_key?(:channel_id))
            #Returns all the message history for a channel 
            @messages = Message.where(:channel_id => params[:channel_id])
        elsif (params.has_key?(:user_id))
             #Will return all the messages for the user id provided
            @messages = Message.where(:user_id => params[:user_id])
        elsif (params.has_key?(:user_id))
        else
            @messages = Message.all
        end
        json_response(@messages)
    end

    def show 
      @message = Message.find(params[:id])
      json_response(@message)
    end

    #Represents the feature #2 of the assignment, as it allows for a consumer
    #of the API to persist a message in the specific channel they have joined.
    def create 
        #Checks to see if the user exists
        @user = User.find(params[:user_id])

        #Checks to see if the channel exists
        @channel = Channel.find(params[:channel_id])

        #Checks to see if we've joined the channel
        @joined = ChannelJoined.find_by!(channel_id: params[:channel_id], user_id: params[:user_id])
       
        #Create the message if there were no failed conditions prior
        @message = Message.create!(message_params)
        json_response(@message, :created)
    end

    def message_params
        params.permit(:message, :channel_id, :user_id)
    end

 
    
end
