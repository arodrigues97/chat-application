import { render, screen } from "@testing-library/react"
import { channelData } from "../../../data/data"
import ChannelHistory from "../ChannelHistory"
import ChannelsMenu from "../ChannelsMenu"

describe("Channel History Tests", () => {
  beforeEach(async () => {
    render(<ChannelHistory channel={channelData[0]} />)
  })

  it("renders messages", () => {
    const { getAllByText } = screen
    channelData[0].messages.forEach((message) => {
      expect(getAllByText(message.message)).toBeDefined()
    })
  })
})
