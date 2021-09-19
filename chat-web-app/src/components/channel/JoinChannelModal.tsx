import { Button, Modal, ModalActions } from "semantic-ui-react"
import { ChatChannel } from "../../types/ChatChannel"

export type JoinChannelModal = {
  isOpen: boolean
  handleClose: () => void
  channel: ChatChannel
}
const JoinChannelModal = (props: JoinChannelModal) => {
  const { isOpen, handleClose, channel } = props
  return (
    <Modal open={isOpen}>
      <Modal.Header>
        <h1>{channel.name}</h1>
      </Modal.Header>
      <Modal.Content>
        <p>Would you like to join the channel - {channel.name} ?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button content="Yes, please" positive />
        <Button content="No, thanks" negative />
      </Modal.Actions>
    </Modal>
  )
}

export default JoinChannelModal
