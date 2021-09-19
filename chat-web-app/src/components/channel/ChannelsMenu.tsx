import { Menu, Modal } from "semantic-ui-react"
import { ChangeChannelFunction } from "../../containers/AppContainer"
import { ChatChannel } from "../../types/ChatChannel"

export type ChatRoomMenuPros = {
  channels: ChatChannel[]
  activeChannel?: ChatChannel | undefined
  handleChannelChange: ChangeChannelFunction
}

const ChannelsMenu = (props: ChatRoomMenuPros) => {
  const { channels, activeChannel, handleChannelChange } = props
  //TODO: determine if joined
  let isJoined = false
  return (
    <Menu fluid vertical tabular>
      {channels &&
        channels.map((channel) =>
          isJoined ? (
            <Menu.Item
              name={channel.name}
              key={channel.id}
              active={activeChannel && activeChannel === channel}
              onClick={() => handleChannelChange(channel)}
            />
          ) : (
            <Modal
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
                  onClick: () => handleChannelChange(channel),
                },
              ]}
            />
          )
        )}
    </Menu>
  )
}

export default ChannelsMenu
