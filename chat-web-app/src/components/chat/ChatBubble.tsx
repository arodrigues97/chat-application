import { Message } from "semantic-ui-react"
import { ChatMessage } from "../../types/ChatMessage"
import "./ChatBubble.css"

export type ChatBubbleProps = {
  message: ChatMessage
}

const ChatBubble = (chatBubbleProps: ChatBubbleProps) => {
  const { message } = chatBubbleProps

  return (
    <div>
      <Message>
        <Message.Header>{message.user.name}</Message.Header>
        <Message.Content className={"chatBubble"}>
          <div className="message">{message.message}</div>
          <div className="timestamp">{message.timeStamp}</div>
        </Message.Content>
      </Message>
    </div>
  )
}

export default ChatBubble
