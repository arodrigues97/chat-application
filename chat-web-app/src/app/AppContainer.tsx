import axios from "axios"
import { useEffect, useState } from "react"
import { Header, Icon, Loader, Segment } from "semantic-ui-react"
import App from "../components/App"
import { ChatChannel } from "../types/ChatChannel"
import "./AppContainer.css"
import { USE_API } from "../config"
import { channelData } from "../data/data"

/**
 * Describes the change channel function signature since it's passed between components
 */
export type ChangeChannelFunction = (channel: ChatChannel) => void

/**
 * Acts as the Apps container, used for handling logic and state control of the app.
 * @returns @link App
 */
const AppContainer = () => {
  /**
   * Represents the list of chat channels to choose from
   */
  const [channels, setChatChannels] = useState<ChatChannel[] | undefined>()

  /**
   * Represents the active chat room joined
   */
  const [activeChannel, setActiveChannel] = useState<ChatChannel | undefined>()

  /**
   * Represents if there is fetching happening
   */
  const [fetching, setFetching] = useState(false)

  /**
   * Handles the async logic to fetch chat channel data
   */
  const fetchChatRooms = async () => {
    console.log("USe=", USE_API)
    if (!USE_API) {
      setChatChannels(channelData)
      return
    }

    setFetching(true)

    axios
      .get<ChatChannel[]>("http://localhost:3000/channels")
      .then((response) => {
        setChatChannels(response.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
      .then(() => {
        setFetching(false)
      })
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
    if (!channels) {
      return
    }
    //If theres channels && no active channel is set, then set it to the first channel in the list
    if (channels.length > 0 && !activeChannel) {
      handleChannelChange(channels[0])
    }
  }, [channels])

  if (fetching) {
    return (
      <div className="loading">
        <Segment placeholder>
          <Header icon>
            <Icon name="question" />
            Loading..
          </Header>
          <Loader active inline="centered" />
        </Segment>
      </div>
    )
  }

  return (
    <div className="app">
      <App
        channels={channels}
        activeChannel={activeChannel}
        handleChannelChange={handleChannelChange}
      />
    </div>
  )
}

export default AppContainer
