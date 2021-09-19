import {
  Container,
  Grid,
  Header,
  Icon,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react"
import { ChangeChannelFunction } from "../containers/AppContainer"
import { ChatChannel } from "../types/ChatChannel"
import { User } from "../types/User"
import "./App.css"
import Channel, { ChannelProps } from "./channel/Channel"
import ChannelsMenu from "./channel/ChannelsMenu"
import CreateChannel, { CreateChannelProps } from "./CreateChannel"

export type AppProps = {
  user: User
  fetching: boolean
  channels: ChatChannel[]
  channelProps: ChannelProps
  activeChannel: ChatChannel | undefined
  error: string | undefined
  createChannelProps: CreateChannelProps
  setError: (error: string | undefined) => void
  handleChannelChange: ChangeChannelFunction
  handleJoinChannel: (channel: ChatChannel) => void
}

const App = (props: AppProps) => {
  const {
    user,
    fetching,
    channels,
    channelProps,
    activeChannel,
    error,
    createChannelProps,
    setError,
    handleChannelChange,
    handleJoinChannel,
  } = props
  const {
    chatBoxProps,
    handleLeaveChannel,
    hasUserJoinedChannel,
    chatSearch,
    channelHistory,
  } = channelProps

  if (!activeChannel && fetching) {
    return (
      <div className="loading">
        <Segment placeholder>
          <Header icon>
            <Icon name="question" />
            Loading..
          </Header>
          <Loader active inline="centered" />
        </Segment>
      </div>
    )
  }
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
              {!activeChannel && <CreateChannel {...createChannelProps} />}
              {activeChannel && (
                <Channel
                  user={user}
                  fetching={fetching}
                  channel={activeChannel}
                  chatBoxProps={chatBoxProps}
                  chatSearch={chatSearch}
                  channelHistory={channelHistory}
                  handleLeaveChannel={handleLeaveChannel}
                  hasUserJoinedChannel={hasUserJoinedChannel}
                />
              )}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default App
