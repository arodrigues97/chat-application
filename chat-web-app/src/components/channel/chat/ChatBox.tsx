import { Button, Form, Search } from "semantic-ui-react"
import {
  ChatMessageChangeFunction,
  PersistMessageFunction,
} from "../../../containers/AppContainer"
import { ChatChannel } from "../../../types/ChatChannel"
import ChatSearch, { ChatSearchProps } from "./ChatSearch"
import "./ChatBox.css"

export type ChatBoxProps = {
  chatMessage: string | undefined
  channel: ChatChannel
  handleChatMessageChange: ChatMessageChangeFunction
  handlePersistMessage: PersistMessageFunction
  chatSearch: ChatSearchProps
}

const ChatBox = (props: ChatBoxProps) => {
  const {
    chatMessage,
    channel,
    handleChatMessageChange,
    handlePersistMessage,
  } = props

  return (
    <Form className="chatBox" onSubmit={() => handlePersistMessage}>
      <Form.Field>
        <input
          placeholder="Send a message"
          value={chatMessage}
          onChange={handleChatMessageChange}
        />
      </Form.Field>
      <Button
        type="submit"
        positive
        onClick={() => handlePersistMessage(chatMessage, channel)}
      >
        Submit
      </Button>
    </Form>
  )
}

export default ChatBox
