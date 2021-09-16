import { User } from "./User"

export type ChatMessage = {
  message: string
  sender: User
  timeStamp: Date
}
