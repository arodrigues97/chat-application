import { ChatChannel } from "../types/ChatChannel"
import { User } from "../types/User"

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

//Mock data while preparing the front-end
export const channelData: ChatChannel[] = [
  {
    id: "32323",
    name: "Homestars",
    messages: [
      {
        id: "1",
        sender: userData[0],
        timeStamp: new Date(),
        message: "Hello, everyone. It's me Adam Rodrigues.",
      },
      {
        id: "2",
        sender: userData[0],
        timeStamp: new Date(),
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
        sender: userData[1],
        timeStamp: new Date(),
        message: "Hello Adam!",
      },
    ],
  },
]
