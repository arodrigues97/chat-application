import { ChangeEvent } from "react"
import { Form, Icon, Message } from "semantic-ui-react"
import { ChatMessage } from "../../../types/ChatMessage"
import { User } from "../../../types/User"
import "./ChatBubble.css"

export type ChatBubbleProps = {
  message: ChatMessage
  user: User
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
    user,
    handleEditMessageChange,
    handleEditMessageSave,
    handleToggleEditMessage,
    handleDeleteMessage,
  } = chatBubbleProps

  return (
    <Message
      onDismiss={
        message.user.id === user.id
          ? () => handleDeleteMessage(message)
          : undefined
      }
    >
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
        <div className="timestamp">
          {message.edited
            ? "Last Edited - " + message.lastEdited
            : message.timeStamp}
        </div>
      </Message.Content>
      {message.user.id === user.id && (
        <Icon
          id="edit-icon"
          link
          name="edit"
          onClick={() => handleToggleEditMessage(message)}
        />
      )}
    </Message>
  )
}

export default ChatBubble
