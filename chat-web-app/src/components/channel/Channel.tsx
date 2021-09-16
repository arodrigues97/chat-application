import { Form, Segment, Button, Checkbox } from "semantic-ui-react"
import { ChatChannel } from "../../types/ChatChannel"
import "./Channel.css"
import ChannelHistory from "./ChannelHistory"
import ChatBox from "./ChatBox"

export type ChannelProps = {
  channel: ChatChannel
}

const Channel = (props: ChannelProps) => {
  const { channel } = props

  return (
    <Segment>
      <h3>{channel.name} - Channel History</h3>

      <ChannelHistory channel={channel} />

      <ChatBox />
    </Segment>
  )
}

export default Channel
