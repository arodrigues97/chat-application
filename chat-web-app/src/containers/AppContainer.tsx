import { ChangeEvent, useEffect, useState } from "react"
import { Header, Icon, Loader, Segment } from "semantic-ui-react"
import App from "../components/App"
import { ChatChannel } from "../types/ChatChannel"
import { ChatMessage } from "../types/ChatMessage"
import {
  getChannels,
  getUserJoinedChannel,
  joinChannel,
} from "../utils/AxiosHelper"

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
   * The error to display
   */
  const [error, setError] = useState<string | undefined>()

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
   * Represents the text value in the search for previous message input
   */
  const [searchText, setSearchText] = useState<string | undefined>()

  /**
   * Represents the search results returned from the search text
   */
  const [searchResults, setSearchResults] = useState<
    ChatMessage[] | undefined
  >()

  /**
   * Handles the change event of message typed in the @link ChatBox
   * @param event The change event
   */
  const handleChatMessageChange = (event: ChangeEvent<HTMLInputElement>) =>
    setChatMessage(event.target.value)

  const sendError = (error: string) => {
    setError(error)
  }

  /**
   * Handles the async logic to fetch chat channel data or if the USE_API constant
   * is set to false the app will work with mock data
   */
  const fetchChatRooms = async () => {
    setFetching(true)
    const response = await getChannels()
    setFetching(false)
    if (response.error) {
      sendError(response.error)
      return
    }
    if (!response.data) {
      sendError("No channel data.")
      return
    }
    setFetching(false)
    setChatChannels(response.data)
  }

  /**
   * Sends an http request to join a channel
   * @param channel The channel to join
   */
  const handleJoinChannel = async (channel: ChatChannel) => {
    setFetching(true)
    const response = await joinChannel(channel, user)
    setFetching(false)
    if (response.error) {
      sendError(response.error)
      return
    }
    if (!response.data) {
      sendError("Missing data!")
      return
    }
    setActiveChannel(channel)
  }

  const hasUserJoinedChannel = async (channel: ChatChannel) => {
    console.log("Checking if user has joined channel: ", joinChannel)
    setFetching(true)
    const response = await getUserJoinedChannel(channel, user)
    setFetching(false)
    if (response.error) {
      sendError(response.error)
      return false
    }
    if (!response.data) {
      sendError("Missing data!")
      return false
    }
    console.log("Joined channel -", response)
    return true
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
      user: user,
      channelId: channel.id,
      timeStamp: "2021-12-1 11:10PM",
    })
    setChatChannels(clone)
    setChatMessage("")
    updateSearchResults()
    console.log("Handled persist message: ", message, ", channel:", channel)
  }

  /**
   * The event handler for deleting a message
   * @param message The message being deleted
   */
  const handleDeleteMessage = (message: ChatMessage) => {
    if (!channels) {
      return
    }

    console.log("Deleting message: ", message)

    const clone = [...channels]
    const channel = clone.find((c) => c.id === message.channelId)
    if (!channel) {
      console.log("No channel found!")
      return
    }

    channel.messages = channel.messages.filter((m) => m.id != message.id)
    setChatChannels(clone)
    updateSearchResults()
  }

  /**
   * The event handler for toggling a message to be edited
   * @param message The message being toggled
   */
  const handleToggleEditMessage = (message: ChatMessage) => {
    if (!channels) {
      return
    }
    console.log("Toggling edit for message: ", message)
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

  /**
   * The event handler for the saving of an edited message
   * @param message The message to edit
   */
  const handleEditMessageSave = (message: ChatMessage) => {
    if (!channels || !editMessage) {
      return
    }

    console.log("Saving message: ", message)

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

  /**
   * Handles the logic for leaving a channel
   * @param channel The channel to leave
   */
  const handleLeaveChannel = (channel: ChatChannel) => {
    if (channel !== activeChannel) {
      return
    }
    setActiveChannel(undefined)
    //TODO: more logic
  }

  /**
   * The event handler when the input changes for the search box.
   * Sets the new next value to update the input, also calculates the results to return
   * @param value The value of the input
   * @param channel The channel to seach in
   */
  const handleSearchChange = (
    value: string | undefined,
    channel: ChatChannel
  ) => {
    setSearchText(value)
    if (!value) {
      return
    }
    setSearchResults(
      channel.messages.filter((m) =>
        m.message.toLocaleLowerCase().includes(value.toLowerCase())
      )
    )
  }

  /**
   * This function is used anytime message state changes to re-update the results
   * if there is any search text inputted
   */
  const updateSearchResults = () => {
    if (!searchText) {
      return
    }
    if (searchText.length === 0 && searchResults && searchResults.length > 0) {
      setSearchResults(undefined)
    } else {
      if (!activeChannel) {
        return
      }
      handleSearchChange(searchText, activeChannel)
    }
  }

  useEffect(() => {
    fetchChatRooms()
  }, [])

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
      user={user}
      channels={channels}
      activeChannel={activeChannel}
      error={error}
      setError={setError}
      handleChannelChange={handleChannelChange}
      handleJoinChannel={handleJoinChannel}
      channelProps={{
        channel: activeChannel,
        chatMessage: chatMessage,
        handleChatMessageChange: handleChatMessageChange,
        handlePersistMessage: handlePersistMessage,
        editMessage: editMessage,
        handleToggleEditMessage: handleToggleEditMessage,
        handleEditMessageChange: handleEditMessageChange,
        handleEditMessageSave: handleEditMessageSave,
        handleDeleteMessage: handleDeleteMessage,
        handleLeaveChannel: handleLeaveChannel,
        hasUserJoinedChannel: hasUserJoinedChannel,
        chatSearch: {
          channel: activeChannel,
          searchText: searchText,
          searchResults: searchResults,
          handleSearchChange,
        },
      }}
    />
  )
}

export default AppContainer
