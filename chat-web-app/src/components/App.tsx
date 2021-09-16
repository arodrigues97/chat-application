import { Container, Grid, Segment } from "semantic-ui-react"
import { ChangeChannelFunction } from "../app/AppContainer"
import { ChatChannel } from "../types/ChatChannel"
import ChannelsMenu from "./channel/ChannelsMenu"

export type AppProps = {
    channels: ChatChannel[]
    activeChannel: ChatChannel | undefined
    handleChannelChange: ChangeChannelFunction
}

const App = (props: AppProps) => {
    const {channels, activeChannel, handleChannelChange} = props
    return <Container>
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
            Segment
          </Segment>
        </Grid.Column>
        </Grid>
    </Container>
}

export default App