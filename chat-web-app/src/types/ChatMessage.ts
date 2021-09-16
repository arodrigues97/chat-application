import { User } from "./User"

export type ChatMessage = {
  id: string
  message: string
  sender: User
  timeStamp: Date
}
