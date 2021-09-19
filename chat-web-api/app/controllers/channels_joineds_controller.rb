class ChannelsJoinedsController < ApplicationController

    def index
        joined = ChannelJoined.all
        json_response(joined)
    end


    def show
        joined = ChannelJoined.find_by!(channel_id: params[:id])
        json_response(joined)
    end


end
