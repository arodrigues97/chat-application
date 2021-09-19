import { Button, Loader, Popup, Segment } from "semantic-ui-react"
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
import ChatSearch, { ChatSearchProps } from "./chat/ChatSearch"
import { User } from "../../types/User"

export type ChannelProps = {
  channel: ChatChannel | undefined
  user: User
  fetching: boolean
  chatMessage: string | undefined
  handleChatMessageChange: ChatMessageChangeFunction
  handlePersistMessage: PersistMessageFunction
  editMessage: string | undefined
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
    fetching,
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
