import { useEffect, useState } from "react"
import App from "../components/App"
import { channelData } from "../data/data"
import { ChatChannel } from "../types/ChatChannel"
import "./AppContainer.css"
import axios from "axios"
import { Dimmer, Loader, Segment, Image, Header, Icon } from "semantic-ui-react"

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

  const [fetching, setFetching] = useState(false)

  /**
   * Handles the async logic to fetch chat channel data
   */
  const fetchChatRooms = async () => {
    console.log("Fetching!")
    setFetching(true)

    axios
      .get<ChatChannel[]>("http://localhost:3000/channels")
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log("Axios Error:", error)
      })
    //Temporarily load mock data
    //setChatChannels(channelData)
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
