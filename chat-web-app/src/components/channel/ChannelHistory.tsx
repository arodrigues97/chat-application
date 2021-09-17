import { Header, Icon, Loader, Segment } from "semantic-ui-react"
import { ChatChannel } from "../../types/ChatChannel"
import ChatBubble from "../chat/ChatBubble"

export type ChannelHistoryProps = {
  channel: ChatChannel
}

const ChannelHistory = (props: ChannelHistoryProps) => {
  const { channel } = props
  const { messages } = channel
  return (
    <div>
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
              <ChatBubble message={message} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ChannelHistory
