import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react"
import { ChangeChannelFunction } from "../containers/AppContainer"
import { ChatChannel } from "../types/ChatChannel"
import Channel from "./channel/Channel"
import ChannelsMenu from "./channel/ChannelsMenu"
import "./App.css"

export type AppProps = {
  channels: ChatChannel[] | undefined
  activeChannel?: ChatChannel | undefined
  handleChannelChange: ChangeChannelFunction
}

const App = (props: AppProps) => {
  const { channels, activeChannel, handleChannelChange } = props
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
              {activeChannel && <Channel channel={activeChannel} />}
            </Grid.Column>
          </Grid>
        )}
      </Container>
    </div>
  )
}

export default App
