import { render, screen } from "@testing-library/react"
import { channelData } from "../../../data/data"
import Channel from "../Channel"

describe("Channel Tests", () => {
  beforeEach(async () => {
    render(<Channel channel={channelData[0]} />)
  })

  test("channel name should render", async () => {
    const { getByText } = screen
    expect(getByText(channelData[0].name + " - Channel")).toBeDefined()
  })
})
