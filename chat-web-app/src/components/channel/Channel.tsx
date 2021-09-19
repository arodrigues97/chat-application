import { Button, Popup, Segment } from "semantic-ui-react"
import { ChatChannel } from "../../types/ChatChannel"
import { User } from "../../types/User"
import "./Channel.css"
import ChannelHistory, { ChannelHistoryProps } from "./ChannelHistory"
import ChatBox, { ChatBoxProps } from "./chat/ChatBox"
import ChatSearch, { ChatSearchProps } from "./chat/ChatSearch"

export type ChannelProps = {
  channel: ChatChannel | undefined
  user: User
  fetching: boolean
  chatBoxProps: ChatBoxProps
  handleLeaveChannel: (channel: ChatChannel) => void
  hasUserJoinedChannel: (channel: ChatChannel) => Promise<boolean>
  chatSearch: ChatSearchProps
  channelHistory: ChannelHistoryProps
}

const Channel = (props: ChannelProps) => {
  const {
    channel,
    user,
    handleLeaveChannel,
    channelHistory,
    chatSearch,
    chatBoxProps,
  } = props

  const {
    editMessage,
    handleToggleEditMessage,
    handleEditMessageChange,
    handleEditMessageSave,
    handleDeleteMessage,
  } = channelHistory

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

        <ChatBox {...chatBoxProps} />
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
