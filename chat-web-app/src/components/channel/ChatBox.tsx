import { Button, Form } from "semantic-ui-react"

const ChatBox = () => {
  return (
    <Form className="chatBox">
      <Form.Field>
        <input placeholder="Send a message" />
      </Form.Field>
      <Button type="submit" primary>
        Submit
      </Button>
    </Form>
  )
}

export default ChatBox
