import { ChatChannel } from "../types/ChatChannel"
import { User } from "../types/User"

/**
 * Mock information if opting not use the API
 */

export const userData: User[] = [
  {
    id: 1,
    name: "Adam Rodrigues",
  },
  {
    id: 2,
    name: "Ankit Kanojia",
  },
]

export const mockUser = userData[0]

export const channelData: ChatChannel[] = [
  {
    id: 1,
    name: "Homestars",
    users: [userData[0], userData[1]],
    messages: [
      {
        id: 1,
        channelId: 1,
        user: userData[0],
        timeStamp: "2021-07-22 11:20 am",
        message: "Hello, everyone. It's me Adam Rodrigues.",
      },
      {
        id: 2,
        channelId: 1,
        user: userData[0],
        timeStamp: "2021-07-22 11:21 am",
        message: "Hello, everyone. It's me Adam Rodrigues.",
      },
    ],
  },
]
