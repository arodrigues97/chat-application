import { ChangeEvent } from "react"
import { Button, Form, Icon, Message, Modal } from "semantic-ui-react"
import { ChatMessage } from "../../../types/ChatMessage"
import "./ChatBubble.css"

export type ChatBubbleProps = {
  message: ChatMessage
  editMessage: string | undefined
  handleEditMessageChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleEditMessageSave: (message: ChatMessage) => void
  handleToggleEditMessage: (message: ChatMessage) => void
  handleDeleteMessage: (message: ChatMessage) => void
}

const ChatBubble = (chatBubbleProps: ChatBubbleProps) => {
  const {
    message,
    editMessage,
    handleEditMessageChange,
    handleEditMessageSave,
    handleToggleEditMessage,
    handleDeleteMessage,
  } = chatBubbleProps

  return (
    <Message onDismiss={() => handleDeleteMessage(message)}>
      <Message.Header>{message.user.name}</Message.Header>
      <Message.Content className="chatBubble">
        {message.editing ? (
          <Form onSubmit={() => handleEditMessageSave(message)}>
            <Form.Field>
              <Form.Input
                type="text"
                value={editMessage}
                onChange={handleEditMessageChange}
              />
            </Form.Field>
          </Form>
        ) : (
          <div className="message">{message.message}</div>
        )}
        <div className="timestamp">{message.timeStamp}</div>
      </Message.Content>
      <Icon link name="edit" onClick={() => handleToggleEditMessage(message)} />
    </Message>
  )
}

export default ChatBubble
