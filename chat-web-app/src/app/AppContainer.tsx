import { useEffect, useState } from "react"
import App from "../components/App"
import { channelData } from "../data/data"
import { ChatChannel } from "../types/ChatChannel"
import "./AppContainer.css"

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

  useEffect(() => {

    //If theres channels && no active channel is set, then set it to the first channel in the list
    if (channels.length > 0 && !activeChannel) {
      setActiveChannel(channels[0])
    }
  }, [channels])

  return <div className="app">
    <App
    channels={channels}
    activeChannel={activeChannel}
    handleChannelChange={handleChannelChange}
  />
  </div>
}

export default AppContainer
