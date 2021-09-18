import { ChatMessage } from "./ChatMessage"

export type ChatChannel = {
  id: number
  name: string
  messages: ChatMessage[]
}
