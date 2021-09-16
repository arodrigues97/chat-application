import { ChatMessage } from "./ChatMessage"

export type ChatChannel = {
  id: string
  name: string
  messages: ChatMessage[]
}
