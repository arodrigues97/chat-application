import { ChatMessage } from "./ChatMessage"
import { User } from "./User"

export type ChatChannel = {
  id: number
  name: string
  messages: ChatMessage[]
  users?: User[] | undefined
}
