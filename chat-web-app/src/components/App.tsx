import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react"
import { ChangeChannelFunction } from "../app/AppContainer"
import { ChatChannel } from "../types/ChatChannel"
import Channel from "./channel/Channel"
import ChannelsMenu from "./channel/ChannelsMenu"

export type AppProps = {
  channels: ChatChannel[]
  activeChannel: ChatChannel | undefined
  handleChannelChange: ChangeChannelFunction
}

const App = (props: AppProps) => {
  const { channels, activeChannel, handleChannelChange } = props
  return (
    <Container>
      {channels.length === 0 && (
        <Segment placeholder>
          <Header icon>
            <Icon name="question" />
            There are no channels available.
          </Header>
          <Button primary content="Create Channel" />
        </Segment>
      )}
      {channels.length > 0 && (
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
  )
}

export default App
