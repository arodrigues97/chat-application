import { User } from "./User"

export type ChatMessage = {
  id: number
  channelId: number
  message: string
  user: User
  timeStamp: string
  lastEdited?: string
  editing?: boolean
  edited?: string
}
