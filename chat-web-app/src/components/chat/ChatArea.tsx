import React from "react"
import { ChatMessage } from "../../types/ChatMessage"
import ChatBubble from "./ChatBubble"

export type ChatAreaProps = {
  messages: ChatMessage[]
}

const ChatArea = (chatAreaProps: ChatAreaProps) => {

  const {messages} = chatAreaProps

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <ChatBubble 
            message={message}
          />
        ))}
      </ul>
    </div>
  )
}

export default ChatArea
