import { ChangeEvent } from "react"
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Loader,
  Message,
  Modal,
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
  fetching: boolean
  channels: ChatChannel[] | undefined
  channelProps: ChannelProps
  activeChannel: ChatChannel | undefined
  error: string | undefined
  channelName: string | undefined
  handleChannelNameChange: (event: ChangeEvent<HTMLInputElement>) => void
  setError: (error: string | undefined) => void
  handleChannelChange: ChangeChannelFunction
  handleJoinChannel: (channel: ChatChannel) => void
  handleCreateChannel: () => void
}

const App = (props: AppProps) => {
  const {
    user,
    fetching,
    channels,
    channelProps,
    activeChannel,
    error,
    channelName,
    handleChannelNameChange,
    handleCreateChannel,
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
                    {channels && (
                      <Modal
                        trigger={
                          <Button
                            icon
                            name="plus"
                            primary
                            content="Create Channel"
                          />
                        }
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
                    )}
                  </Segment>
                )}
                {activeChannel && (
                  <Channel
                    user={user}
                    fetching={fetching}
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
