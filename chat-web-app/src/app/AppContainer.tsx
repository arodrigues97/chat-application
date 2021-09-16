import { useState } from "react"
import { Container } from "semantic-ui-react"
import { ChatRoom } from "../types/ChatRoom"
import App from "../components/App"

/**
 * Acts as the Apps container, used for handling logic and state control of the app.
 * @returns @link App
 */
const AppContainer = () => {

  /**
   * Represents the list of chat rooms loaded in the app
   */
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([])

  /**
   * Represents the chat room being viewed
   */
  const [chatRoom, setChatRoom] = useState<ChatRoom | undefined>()

  return <App
    rooms={chatRooms}
    room={chatRoom}
  />
}

export default AppContainer
