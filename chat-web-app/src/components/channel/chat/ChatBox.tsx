import { Button, Form } from "semantic-ui-react"
import {
  ChatMessageChangeFunction,
  PersistMessageFunction,
} from "../../../containers/AppContainer"
import { ChatChannel } from "../../../types/ChatChannel"
import "./ChatBox.css"

export type ChatBoxProps = {
  chatMessage: string | undefined
  channel: ChatChannel | undefined
  handleChatMessageChange: ChatMessageChangeFunction
  handlePersistMessage: PersistMessageFunction
}

const ChatBox = (props: ChatBoxProps) => {
  const {
    chatMessage,
    channel,
    handleChatMessageChange,
    handlePersistMessage,
  } = props

  if (!channel) {
    return <div>Invalid props! No channel provided.</div>
  }

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
