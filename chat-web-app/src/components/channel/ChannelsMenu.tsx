import { Menu, Modal } from "semantic-ui-react"
import { ChangeChannelFunction } from "../../containers/AppContainer"
import { ChatChannel } from "../../types/ChatChannel"
import { User } from "../../types/User"

export type ChatRoomMenuPros = {
  channels: ChatChannel[]
  activeChannel?: ChatChannel | undefined
  handleChannelChange: ChangeChannelFunction
  handleJoinChannel: (channel: ChatChannel) => void
  user: User
}

const ChannelsMenu = (props: ChatRoomMenuPros) => {
  const {
    channels,
    activeChannel,
    handleChannelChange,
    handleJoinChannel,
    user,
  } = props

  return (
    <Menu fluid vertical tabular>
      {channels &&
        channels.map((channel) =>
          channel.users && channel.users.find((u) => u.id === user.id) ? (
            <Menu.Item
              name={channel.name}
              key={channel.id}
              active={activeChannel && activeChannel === channel}
              onClick={() => handleChannelChange(channel)}
            />
          ) : (
            <Modal
              key={channel.id}
              trigger={
                <Menu.Item
                  name={channel.name}
                  key={channel.id}
                  active={activeChannel && activeChannel === channel}
                />
              }
              header={channel.name}
              content="Would you like to join the channel?"
              actions={[
                "No, thanks",
                {
                  key: "yes",
                  content: "Yes, please",
                  positive: true,
                  onClick: () => handleJoinChannel(channel),
                },
              ]}
            />
          )
        )}
    </Menu>
  )
}

export default ChannelsMenu
