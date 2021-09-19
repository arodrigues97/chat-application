class ChannelsController < ApplicationController

    
    def index 
        channels = Channel.all
        json_response(channels)
    end

    def show
        channel = Channel.find(params[:id])
        json_response(channel)
    end

    def create
        channel = Channel.create!(channel_params)
        json_response(channel)
    end

    def active_channels
        channels = Channel.where(:active => true)
        json_response(channels)
    end


    def users
        channel = Channel.find(params[:id])
        users = ChannelJoined.find_by!(channel_id: params[:id])

        if users
            return json_response({
                "Yo": "Hi"
            })
        end

        return json_response({
            channels: channel,
            users: users
        })
    end
    
    def statistics 
        channel = Channel.find_by!(id: params[:id])

        joinedChannels = ChannelJoined.where(channel_id: params[:id])
messages = Message.where(channel_id: params[:id])
        owner = User.find_by!(id: channel.user_id)
        json_response({
            users: joinedChannels.length,
            messages: messages.length,
            owner: owner.name
        })
    end

    def join 
        user = User.find_by!(id: params[:user_id])
        
        if (ChannelJoined.exists?({
            channel_id: params[:id],
            user_id: params[:user_id]
        }))

        then
            return json_response({
                message: "You've already joined this channel."
            })
        else

            joined = ChannelJoined.create!(user_id: params[:user_id], channel_id: params[:id])

            json_response(joined)
        end
    end

    def user_joined
        user = User.find_by!(id: params[:user_id])

        return json_response({
            "joined": ChannelJoined.exists?({
                channel_id: params[:id],
                user_id: params[:user_id]
            })
        })
    end     

    def channel_params
        params.permit(:user_id, :name, :active)
    end

end


