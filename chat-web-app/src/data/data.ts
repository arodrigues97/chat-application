import { ChatChannel } from "../types/ChatChannel"
import { User } from "../types/User"

/**
 * Mock information if opting not use the API
 */

export const userData: User[] = [
  {
    id: "2",
    name: "Adam Rodrigues",
  },
  {
    id: "3",
    name: "Anit Kanojia",
  },
]

export const channelData: ChatChannel[] = [
  {
    id: "32323",
    name: "Homestars",
    messages: [
      {
        id: "1",
        channelId: "1",
        user: userData[0],
        timeStamp: "2021-07-22 11:20 am",
        message: "Hello, everyone. It's me Adam Rodrigues.",
      },
      {
        id: "2",
        channelId: "1",
        user: userData[0],
        timeStamp: "2021-07-22 11:21 am",
        message: "Hello, everyone. It's me Adam Rodrigues.",
      },
    ],
  },
  {
    id: "34343",
    name: "Adam Rodrigues",
    messages: [
      {
        id: "4",
        channelId: "1",
        user: userData[1],
        timeStamp: "2021-07-22 11:24 am",
        message: "Hello Adam!",
      },
    ],
  },
  {
    id: "343432",
    name: "Joey Tribiani",
    messages: [
      {
        id: "5",
        channelId: "1",
        user: userData[1],
        timeStamp: "2021-07-22 11:43 am",
        message: "Hello Adam!",
      },
    ],
  },
]
