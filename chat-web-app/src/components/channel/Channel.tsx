import { Form, Segment, Button, Checkbox } from "semantic-ui-react"
import { ChatChannel } from "../../types/ChatChannel"
import "./Channel.css"
import ChannelHistory from "./ChannelHistory"
import ChatBox from "../chat/ChatBox"
import { ChatMessageChangeFunction } from "../../containers/ChannelContainer"
import { PersistMessageFunction } from "../../containers/AppContainer"

export type ChannelProps = {
  channel: ChatChannel
  chatMessage: string | undefined
  handleChatMessageChange: ChatMessageChangeFunction
  handlePersistMessage: PersistMessageFunction
}

const Channel = (props: ChannelProps) => {
  const {
    channel,
    chatMessage,
    handleChatMessageChange,
    handlePersistMessage,
  } = props

  return (
    <div className="channel">
      <Segment>
        <h3>{channel.name} - Channel</h3>

        <ChannelHistory channel={channel} />

        <ChatBox
          channel={channel}
          chatMessage={chatMessage}
          handleChatMessageChange={handleChatMessageChange}
          handlePersistMessage={handlePersistMessage}
        />
      </Segment>
    </div>
  )
}

export default Channel
