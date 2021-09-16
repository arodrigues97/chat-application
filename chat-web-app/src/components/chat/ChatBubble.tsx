import { ChatMessage } from "../../types/ChatMessage"
import { User } from "../../types/user"

export type ChatBubbleProps = {
  message: ChatMessage
}

const ChatBubble = (chatBubbleProps: ChatBubbleProps) => {
  
  const {message} = chatBubbleProps

  return <div>
    <h4>Sender: {message.sender.name}</h4>
    <p>{message.message}</p>
  </div>
}

export default ChatBubble
