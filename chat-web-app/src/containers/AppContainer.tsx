import axios from "axios"
import { useEffect, useState } from "react"
import { Header, Icon, Loader, Segment } from "semantic-ui-react"
import App from "../components/App"
import { ChatChannel } from "../types/ChatChannel"
import { USE_API } from "../config"
import { channelData } from "../data/data"

/**
 * The structure of the method for changing a channel
 */
export type ChangeChannelFunction = (channel: ChatChannel) => void

/**
 * The structure of the method for persisting a message
 */
export type PersistMessageFunction = (
  message: string | undefined,
  channel: ChatChannel
) => void

/**
 * Handles the logic and state for the App
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
   * Handles the async logic to fetch chat channel data or if the USE_API constant
   * is set to false the app will work with mock data
   */
  const fetchChatRooms = async () => {
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

  const handlePersistMessage: PersistMessageFunction = (
    message: string | undefined,
    channel: ChatChannel
  ) => {
    if (!message) {
      return
    }
    if (!channels) {
      return
    }
    const clone = [...channels]
    const channelClone = clone.find((c) => c.id === channel.id)
    if (!channelClone) {
      return
    }
    channelClone.messages.push({
      id: channelClone.messages.length + 1,
      message: message,
      user: {
        id: 1,
        name: "Adam Rodrigues",
      },
      channelId: 1,
      timeStamp: "2021-12-1 11:10PM",
    })
    setChatChannels(clone)
    console.log("Handled persist message: ", message, ", channel:", channel)
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
    <App
      channels={channels}
      activeChannel={activeChannel}
      handleChannelChange={handleChannelChange}
      handlePersistMessage={handlePersistMessage}
    />
  )
}

export default AppContainer
