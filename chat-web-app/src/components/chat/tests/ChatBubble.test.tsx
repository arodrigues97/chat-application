import { render, screen } from "@testing-library/react"
import { channelData } from "../../../data/data"
import Channel from "../../channel/Channel"
import ChatBubble from "../ChatBubble"

describe("Chat Bubble", () => {
  test("chat bubble content renders", async () => {
    const message = channelData[0].messages[0]
    render(<ChatBubble message={message} />)
    const { getByText } = screen
    if (message.message.length > 0) {
      expect(getByText(message.message)).toBeDefined()
    }
    expect(getByText(message.user.name)).toBeDefined()
    expect(getByText(message.timeStamp)).toBeDefined()
  })
})
