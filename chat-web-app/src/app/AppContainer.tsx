import { useEffect, useState } from "react"
import App from "../components/App"
import { channelData } from "../data/channelData"
import { ChatChannel } from "../types/ChatChannel"


export type ChangeChannelFunction = (channel: ChatChannel) => void

/**
 * Acts as the Apps container, used for handling logic and state control of the app.
 * @returns @link App
 */
const AppContainer = () => {

  /**
   * Represents the list of chat channels to choose from
   */
  const [channels, setChatChannels] = useState<ChatChannel[]>([])

  /**
   * Represents the active chat room joined
   */
  const [activeChannel, setActiveChannel] = useState<ChatChannel | undefined>()

  /**
   * Handles the async logic to fetch chat channel data
   */
  const fetchChatRooms = async () => {
    //Temporarily load mock data
    setChatChannels(channelData)

    //Set active channel to index 1
    setActiveChannel(channels[0])
  }

  /**
   * Changes the active channel
   * @param channel The channel to set active
   */
  const handleChannelChange = (channel: ChatChannel) => {
    setActiveChannel(channel)
  }

  useEffect(() => {
    
    fetchChatRooms()
  }, [])

  return <App
    channels={channels}
    activeChannel={activeChannel}
    handleChannelChange={handleChannelChange}
  />
}

export default AppContainer
