import { User } from "./User"

export type ChatMessage = {
  id: string
  channelId: string
  message: string
  user: User
  timeStamp: String
}
