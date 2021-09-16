class ChannelsJoinedsController < ApplicationController

    def index
        @joined = ChannelJoined.all
        json_response(@joined)
    end

    def create
        @joined = ChannelJoined.create!(join_channel_params)
        json_response(@joined)
    end

    def join_channel_params
        params.permit(:channel_id, :user_id)
    end
end
