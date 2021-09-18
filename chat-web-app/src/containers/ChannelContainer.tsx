import { ChangeEvent, useState } from "react"
import { act } from "react-dom/test-utils"
import Channel from "../components/channel/Channel"
import { ChatChannel } from "../types/ChatChannel"
import { PersistMessageFunction } from "./AppContainer"

export type ChannelContainerProps = {
  activeChannel: ChatChannel
  handlePersistMessage: PersistMessageFunction
}

/**
 * Describes the function used for handling a change in the chat message
 */
export type ChatMessageChangeFunction = (
  event: ChangeEvent<HTMLInputElement>
) => void

/**
 * Handles the logic for the chat container
 * @param props The channel container props
 * @returns The @link Channel component
 */
const ChannelContainer = (props: ChannelContainerProps) => {
  /**
   * Represents the text value of the chat message in the chat box
   */
  const [chatMessage, setChatMessage] = useState<string | undefined>()

  /**
   * Handles the change event of message typed in the @link ChatBox
   * @param event The change event
   */
  const handleChatMessageChange = (event: ChangeEvent<HTMLInputElement>) =>
    setChatMessage(event.target.value)

  const { activeChannel, handlePersistMessage: handlePersistMessageParent } =
    props

  const handlePersistMessage: PersistMessageFunction = () => {
    if (!chatMessage) {
      return
    }
    handlePersistMessageParent(chatMessage, activeChannel)
    setChatMessage("")
  }

  return (
    <>
      <Channel
        channel={activeChannel}
        chatMessage={chatMessage}
        handleChatMessageChange={handleChatMessageChange}
        handlePersistMessage={handlePersistMessage}
      />
    </>
  )
}

export default ChannelContainer
