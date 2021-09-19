import { ChangeEvent } from "react"
import { Button, Popup, Segment } from "semantic-ui-react"
import {
  ChatMessageChangeFunction,
  PersistMessageFunction,
} from "../../containers/AppContainer"
import { ChatChannel } from "../../types/ChatChannel"
import { ChatMessage } from "../../types/ChatMessage"
import { User } from "../../types/User"
import "./Channel.css"
import ChannelHistory from "./ChannelHistory"
import ChatBox from "./chat/ChatBox"
import ChatSearch, { ChatSearchProps } from "./chat/ChatSearch"

export type ChannelProps = {
  channel: ChatChannel | undefined
  user: User
  fetching: boolean
  chatMessage: string
  handleChatMessageChange: ChatMessageChangeFunction
  handlePersistMessage: PersistMessageFunction
  editMessage: string
  handleToggleEditMessage: (message: ChatMessage) => void
  handleEditMessageChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleEditMessageSave: (message: ChatMessage) => void
  handleDeleteMessage: (message: ChatMessage) => void
  handleLeaveChannel: (channel: ChatChannel) => void
  hasUserJoinedChannel: (channel: ChatChannel) => Promise<boolean>
  chatSearch: ChatSearchProps
}

const Channel = (props: ChannelProps) => {
  const {
    channel,
    user,
    chatMessage,
    handleChatMessageChange,
    handlePersistMessage,
    editMessage,
    handleToggleEditMessage,
    handleEditMessageChange,
    handleEditMessageSave,
    handleDeleteMessage,
    handleLeaveChannel,
    chatSearch,
  } = props

  if (!channel) {
    return <div>Invalid props!</div>
  }

  return (
    <div className="channel">
      <Segment>
        <h3>{channel.name} - Channel</h3>

        <ChannelHistory
          user={user}
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
          chatSearch={chatSearch}
        />
      </Segment>

      <div className="channelFunctions">
        <Button
          primary
          content="Leave"
          onClick={() => handleLeaveChannel(channel)}
        />
        <Popup
          trigger={<Button icon="info" />}
          content={
            " Number of Users: " +
            channel.users?.length +
            " Number of Messages: " +
            channel.messages.length
          }
        />
        <div className="chatSearch">
          <ChatSearch {...chatSearch} />
        </div>
      </div>
    </div>
  )
}

export default Channel
