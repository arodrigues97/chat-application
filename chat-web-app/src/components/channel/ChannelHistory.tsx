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
      <ul className="channelMessageList">
        {messages.map((message) => (
          <li key={message.id}>
            <ChatBubble message={message} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChannelHistory
