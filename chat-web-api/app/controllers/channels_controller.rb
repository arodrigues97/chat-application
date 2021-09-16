class ChannelsController < ApplicationController

    
    def index 
        @channels = Channel.all
        json_response(@channels)
    end

    def show
        @channel = Channel.find(params[:id])
        json_response(@channel)
    end

    def create
        @channel = Channel.create!(channel_params)
        json_response(@channel)
    end

    def channel_params
        params.permit(:user_id, :name)
    end


end


