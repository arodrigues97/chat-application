import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { Header, Icon, Loader, Segment } from "semantic-ui-react"
import App from "../components/App"
import { ChatChannel } from "../types/ChatChannel"
import { USE_API } from "../config"
import { channelData } from "../data/data"
import { ChatMessage } from "../types/ChatMessage"

/**
 * The structure of the method for changing a channel
 */
export type ChangeChannelFunction = (channel: ChatChannel) => void

/**
 * Describes the function used for handling a change in the chat message
 */
export type ChatMessageChangeFunction = (
  event: ChangeEvent<HTMLInputElement>
) => void

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
   * Represents the logged in user
   */
  const [user, setUser] = useState({
    id: 1,
    name: "Adam Rodrigues",
  })

  /**
   * Represents the text value of the chat message in the chat box
   */
  const [chatMessage, setChatMessage] = useState<string | undefined>()

  /**
   * Represents the text value of the chat message being edited
   */
  const [editMessage, setEditMessage] = useState<string | undefined>()

  /**
   * Handles the change event of message typed in the @link ChatBox
   * @param event The change event
   */
  const handleChatMessageChange = (event: ChangeEvent<HTMLInputElement>) =>
    setChatMessage(event.target.value)

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
    setChatMessage("")
  }

  /**
   * Handles the logic for persisting a message to a channel
   * @param message The message to persist
   * @param channel The channel to persist the message to
   */
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
    setChatMessage("")
    console.log("Handled persist message: ", message, ", channel:", channel)
  }

  const handleDeleteMessage = (message: ChatMessage) => {
    if (!channels) {
      return
    }

    const clone = [...channels]
    const channel = clone.find((c) => c.id === message.channelId)
    if (!channel) {
      console.log("No channel found!")
      return
    }

    channel.messages = channel.messages.filter((m) => m.id != message.id)
    console.log(channel)
    setChatChannels(clone)
  }

  const handleToggleEditMessage = (message: ChatMessage) => {
    if (!channels) {
      return
    }

    const clone = [...channels]

    if (editMessage != undefined) {
      clone.forEach((c) =>
        //Loop through channels and messages to see if a previous message
        //was toggled on
        c.messages.find((m) => {
          if (m.editing && m.id !== message.id) {
            m.editing = false
          }
        })
      )
    }

    const channel = clone.find((c) => c.id === message.channelId)
    if (!channel) {
      console.log("No channel found!")
      return
    }

    let cloneMessage = channel.messages.find((m) => m.id === message.id)
    if (!cloneMessage) {
      console.log("No message found!")
      return
    }
    //Toggle the edit mode for the message
    cloneMessage.editing = !cloneMessage.editing

    //Set the edit message to the original message
    setEditMessage(cloneMessage.editing ? cloneMessage.message : "")

    //Set the state with the new channel state
    setChatChannels(clone)
  }

  const handleEditMessageChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEditMessage(event.target.value)

  const handleEditMessageSave = (message: ChatMessage) => {
    if (!channels || !editMessage) {
      return
    }

    const clone = [...channels]
    const channel = clone.find((c) => c.id === message.channelId)
    if (!channel) {
      return
    }
    let cloneMessage = channel.messages.find((m) => m.id === message.id)
    if (!cloneMessage) {
      return
    }

    //Set the message to the not editing state
    cloneMessage.editing = false
    //Set the message content to the newely typed message
    cloneMessage.message = editMessage
    //Clear the saved state of the editing message
    setEditMessage("")
    //Set the state with the new channel state
    setChatChannels(clone)
  }

  useEffect(() => {
    fetchChatRooms()
  }, [])

  // useEffect(() => {
  //   if (!channels) {
  //     return
  //   }
  //   //If theres channels && no active channel is set, then set it to the first channel in the list
  //   if (channels.length > 0 && !activeChannel) {
  //     handleChannelChange(channels[0])
  //   }
  // }, [channels])

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
      chatMessage={chatMessage}
      handleChatMessageChange={handleChatMessageChange}
      handlePersistMessage={handlePersistMessage}
      editMessage={editMessage}
      handleToggleEditMessage={handleToggleEditMessage}
      handleEditMessageChange={handleEditMessageChange}
      handleEditMessageSave={handleEditMessageSave}
      handleDeleteMessage={handleDeleteMessage}
    />
  )
}

export default AppContainer
