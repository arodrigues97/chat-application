import { User } from "./user"

export type ChatMessage = {
  message: string
  sender: User
  timeStamp: Date
}
