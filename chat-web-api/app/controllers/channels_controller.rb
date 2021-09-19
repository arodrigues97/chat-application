class ChannelsController < ApplicationController

    #Returns all the channels
    def index 
        channels = Channel.all  
        json_response(channels)
    end

    #Returns a specific channel 
    def show
        channel = Channel.find(params[:id])
        json_response(channel)
    end

    #Creates a new channel, creates a relationship between the owner being joined
    #to the channel automatically
    def create
        channel = Channel.create!(channel_params)
        joined = ChannelJoined.create!(user_id: params[:user_id], channel_id: channel.id)
        json_response(channel)
    end

    #Returns a list of active channels
    def active_channels
        channels = Channel.where(:active => true)
        json_response(channels)
    end

    #Returns the list of users for a channel
    def users
        channel = Channel.find(params[:id])
        users = ChannelJoined.where(channel_id: params[:id])
        return json_response({
            users: users.map{|j| j.user}
        })
    end
    
    #Returns statistics for the channel
    def statistics 
        channel = Channel.find_by!(id: params[:id])
        joinedChannels = ChannelJoined.where(channel_id: params[:id])
        messages = Message.where(channel_id: params[:id])
        json_response({
            users: joinedChannels.length,
            messages: messages.length,
        })
    end

    def join 

        #Check if user exists
        user = User.find_by!(id: params[:user_id])
        
        #If they have already joined then return their joined response
        if (ChannelJoined.exists?({
            channel_id: params[:id],
            user_id: params[:user_id]
        }))
        then
            joined = ChannelJoined.find_by!(user_id: params[:user_id], channel_id: params[:id])
            json_response(joined.channel)
        else
            #Else create the relationship and return the response!
            joined = ChannelJoined.create!(user_id: params[:user_id], channel_id: params[:id])
            json_response(joined.channel)
        end
    end

    #Checks if a user has joined a specified channel
    def user_joined
        user = User.find_by!(id: params[:user_id])
        return json_response({
            "joined": ChannelJoined.exists?({
                channel_id: params[:id],
                user_id: params[:user_id]
            })
        })
    end     

    def search_by_name
        channel = Channel.where("name like ?", "#{params[:name]}")
        json_response(channel)
    end

    def channel_params
        params.permit(:user_id, :name, :active)
    end

end


