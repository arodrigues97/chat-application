import { ChangeEvent } from "react"
import { Header, Icon, Loader, Segment } from "semantic-ui-react"
import { ChatChannel } from "../../types/ChatChannel"
import { ChatMessage } from "../../types/ChatMessage"
import { User } from "../../types/User"
import ChatBubble from "./chat/ChatBubble"

export type ChannelHistoryProps = {
  channel: ChatChannel
  user: User
  editMessage: string | undefined
  handleEditMessageChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleEditMessageSave: (message: ChatMessage) => void
  handleToggleEditMessage: (message: ChatMessage) => void
  handleDeleteMessage: (message: ChatMessage) => void
}

const ChannelHistory = (props: ChannelHistoryProps) => {
  const {
    user,
    channel,
    editMessage,
    handleToggleEditMessage,
    handleEditMessageChange,
    handleEditMessageSave,
    handleDeleteMessage,
  } = props
  const { messages } = channel
  return (
    <div className="chatHistory">
      {messages && messages.length === 0 && (
        <Segment placeholder>
          <Header icon>
            <Icon name="exclamation" />
            No messages
          </Header>
        </Segment>
      )}
      <ul className="channelMessageList">
        {messages &&
          messages.length > 0 &&
          messages.map((message) => (
            <li key={message.id}>
              <ChatBubble
                user={user}
                message={message}
                editMessage={editMessage}
                handleToggleEditMessage={handleToggleEditMessage}
                handleEditMessageChange={handleEditMessageChange}
                handleEditMessageSave={handleEditMessageSave}
                handleDeleteMessage={handleDeleteMessage}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ChannelHistory
