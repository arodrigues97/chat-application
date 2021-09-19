import { Button, Segment } from "semantic-ui-react"
import {
  ChatMessageChangeFunction,
  PersistMessageFunction,
} from "../../containers/AppContainer"
import { ChatChannel } from "../../types/ChatChannel"
import ChatBox from "./chat/ChatBox"
import "./Channel.css"
import ChannelHistory from "./ChannelHistory"
import { ChangeEvent } from "react"
import { ChatMessage } from "../../types/ChatMessage"

export type ChannelProps = {
  channel: ChatChannel
  chatMessage: string | undefined
  handleChatMessageChange: ChatMessageChangeFunction
  handlePersistMessage: PersistMessageFunction
  editMessage: string | undefined
  handleToggleEditMessage: (message: ChatMessage) => void
  handleEditMessageChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleEditMessageSave: (message: ChatMessage) => void
  handleDeleteMessage: (message: ChatMessage) => void
}

const Channel = (props: ChannelProps) => {
  const {
    channel,
    chatMessage,
    handleChatMessageChange,
    handlePersistMessage,
    editMessage,
    handleToggleEditMessage,
    handleEditMessageChange,
    handleEditMessageSave,
    handleDeleteMessage,
  } = props

  return (
    <div className="channel">
      <Segment>
        <h3>{channel.name} - Channel</h3>

        <ChannelHistory
          channel={channel}
          editMessage={editMessage}
          handleToggleEditMessage={handleToggleEditMessage}
          handleEditMessageChange={handleEditMessageChange}
          handleEditMessageSave={handleEditMessageSave}
          handleDeleteMessage={handleDeleteMessage}
        />

        <ChatBox
          channel={channel}
          chatMessage={chatMessage}
          handleChatMessageChange={handleChatMessageChange}
          handlePersistMessage={handlePersistMessage}
        />
      </Segment>

      <Button floated="right" primary content="Leave" />
    </div>
  )
}

export default Channel
