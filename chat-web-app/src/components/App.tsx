import { Container } from "semantic-ui-react"
import { ChatRoom } from "../types/ChatRoom"

export type AppProps = {
    rooms: ChatRoom[]
    room: ChatRoom | undefined
}

const App = (props: AppProps) => {
    const {rooms, room} = props
    return <Container></Container>
}

export default App