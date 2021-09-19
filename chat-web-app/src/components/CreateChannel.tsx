import { ChangeEvent } from "react"
import { Button, Form, Header, Icon, Modal, Segment } from "semantic-ui-react"

export type CreateChannelProps = {
  channelName: string
  handleChannelNameChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleCreateChannel: () => void
}

const CreateChannel = (props: CreateChannelProps) => {
  const { channelName, handleChannelNameChange, handleCreateChannel } = props

  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="question" />
        Create your own channel
      </Header>
      <Modal
        trigger={<Button icon name="plus" primary content="Create Channel" />}
        header="Create a Channel"
        content={
          <Modal.Content>
            <Form>
              <Form.Field>
                <Form.Input
                  value={channelName}
                  onChange={handleChannelNameChange}
                  type="text"
                  placeholder="Enter the channel name"
                />
              </Form.Field>
            </Form>
          </Modal.Content>
        }
        actions={[
          "Cancel",
          {
            key: "yes",
            content: "Create",
            positive: true,
            onClick: () => handleCreateChannel(),
          },
        ]}
      />
    </Segment>
  )
}

export default CreateChannel
