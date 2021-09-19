import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react"
import { ChangeChannelFunction } from "../containers/AppContainer"
import { ChatChannel } from "../types/ChatChannel"
import { User } from "../types/User"
import "./App.css"
import Channel, { ChannelProps } from "./channel/Channel"
import ChannelsMenu from "./channel/ChannelsMenu"

export type AppProps = {
  user: User
  channels: ChatChannel[] | undefined
  channelProps: ChannelProps
  activeChannel: ChatChannel | undefined
  error: string | undefined
  setError: (error: string | undefined) => void
  handleChannelChange: ChangeChannelFunction
  handleJoinChannel: (channel: ChatChannel) => void
}

const App = (props: AppProps) => {
  const {
    user,
    channels,
    channelProps,
    activeChannel,
    error,
    setError,
    handleChannelChange,
    handleJoinChannel,
  } = props
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
    hasUserJoinedChannel,
    chatSearch,
  } = channelProps
  return (
    <div className="app">
      <Container>
        {error && (
          <Message negative onDismiss={() => setError(undefined)}>
            <Message.Header>Error</Message.Header>
            <Message.Content>
              <p>{error}</p>
            </Message.Content>
          </Message>
        )}
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
                user={user}
                channels={channels}
                activeChannel={activeChannel}
                handleChannelChange={handleChannelChange}
                handleJoinChannel={handleJoinChannel}
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
                    hasUserJoinedChannel={hasUserJoinedChannel}
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
