import { Button, Form } from "semantic-ui-react"
import { PersistMessageFunction } from "../../containers/AppContainer"
import { ChatMessageChangeFunction } from "../../containers/ChannelContainer"
import { ChatChannel } from "../../types/ChatChannel"

export type ChatBoxProps = {
  chatMessage: string | undefined
  channel: ChatChannel
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
        primary
        onClick={() => handlePersistMessage(chatMessage, channel)}
      >
        Submit
      </Button>
    </Form>
  )
}

export default ChatBox
