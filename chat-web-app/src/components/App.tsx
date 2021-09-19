import { ChangeEvent } from "react"
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react"
import {
  ChangeChannelFunction,
  ChatMessageChangeFunction,
  PersistMessageFunction,
} from "../containers/AppContainer"
import { ChatChannel } from "../types/ChatChannel"
import { ChatMessage } from "../types/ChatMessage"
import "./App.css"
import Channel, { ChannelProps } from "./channel/Channel"
import ChannelsMenu from "./channel/ChannelsMenu"
import { ChatSearchProps } from "./channel/chat/ChatSearch"

export type AppProps = {
  channels: ChatChannel[] | undefined
  channelProps: ChannelProps
  activeChannel: ChatChannel | undefined
  handleChannelChange: ChangeChannelFunction
}

const App = (props: AppProps) => {
  const { channels, channelProps, activeChannel, handleChannelChange } = props
  const {
    chatMessage,
    handleChatMessageChange,
    handlePersistMessage,
    handleToggleEditMessage,
    editMessage,
    handleEditMessageChange,
    handleEditMessageSave,
    handleDeleteMessage,
    handleLeaveChannel,
    chatSearch,
  } = channelProps
  return (
    <div className="app">
      <Container>
        {(!channels || channels.length === 0) && (
          <Segment placeholder>
            <Header icon>
              <Icon name="question" />
              There are no channels available.
            </Header>
            {channels && <Button primary content="Create Channel" />}
          </Segment>
        )}
        {channels && channels.length > 0 && (
          <Grid>
            <Grid.Column width={4}>
              <ChannelsMenu
                channels={channels}
                activeChannel={activeChannel}
                handleChannelChange={handleChannelChange}
              />
            </Grid.Column>
            <Grid.Column stretched width={12}>
              <Segment>
                {!activeChannel && (
                  <Segment placeholder>
                    <Header icon>
                      <Icon name="question" />
                      Create your own channel
                    </Header>
                    {channels && <Button primary content="Create Channel" />}
                  </Segment>
                )}
                {activeChannel && (
                  <Channel
                    channel={activeChannel}
                    chatMessage={chatMessage}
                    handleChatMessageChange={handleChatMessageChange}
                    handlePersistMessage={handlePersistMessage}
                    editMessage={editMessage}
                    handleToggleEditMessage={handleToggleEditMessage}
                    handleEditMessageChange={handleEditMessageChange}
                    handleEditMessageSave={handleEditMessageSave}
                    handleDeleteMessage={handleDeleteMessage}
                    handleLeaveChannel={handleLeaveChannel}
                    chatSearch={chatSearch}
                  />
                )}
              </Segment>
            </Grid.Column>
          </Grid>
        )}
      </Container>
    </div>
  )
}

export default App
