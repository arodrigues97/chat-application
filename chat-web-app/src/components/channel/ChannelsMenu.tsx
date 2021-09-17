import { Menu } from "semantic-ui-react"
import { ChangeChannelFunction } from "../../app/AppContainer"
import { ChatChannel } from "../../types/ChatChannel"

export type ChatRoomMenuPros = {
  channels: ChatChannel[]
  activeChannel?: ChatChannel | undefined
  handleChannelChange: ChangeChannelFunction
}

const ChannelsMenu = (props: ChatRoomMenuPros) => {
  const { channels, activeChannel, handleChannelChange } = props

  return (
    <Menu fluid vertical tabular>
      {channels &&
        channels.map((channel) => (
          <Menu.Item
            name={channel.name}
            key={channel.id}
            active={activeChannel && activeChannel === channel}
            onClick={() => handleChannelChange(channel)}
          />
        ))}
    </Menu>
  )
}

export default ChannelsMenu
