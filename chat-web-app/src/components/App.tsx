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
import Channel from "./channel/Channel"
import ChannelsMenu from "./channel/ChannelsMenu"

export type AppProps = {
  channels: ChatChannel[] | undefined
  activeChannel?: ChatChannel | undefined
  handleChannelChange: ChangeChannelFunction
  chatMessage: string | undefined
  handleChatMessageChange: ChatMessageChangeFunction
  handlePersistMessage: PersistMessageFunction
  editMessage: string | undefined
  handleToggleEditMessage: (message: ChatMessage) => void
  handleEditMessageChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleEditMessageSave: (message: ChatMessage) => void
  handleDeleteMessage: (message: ChatMessage) => void
}

const App = (props: AppProps) => {
  const {
    channels,
    activeChannel,
    handleChannelChange,
    chatMessage,
    handleChatMessageChange,
    handlePersistMessage,
    handleToggleEditMessage,
    editMessage,
    handleEditMessageChange,
    handleEditMessageSave,
    handleDeleteMessage,
  } = props
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
                />
              )}
            </Grid.Column>
          </Grid>
        )}
      </Container>
    </div>
  )
}

export default App
