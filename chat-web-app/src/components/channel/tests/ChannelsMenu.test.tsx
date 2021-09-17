import { render, screen, fireEvent } from "@testing-library/react"
import { channelData } from "../../../data/data"
import ChannelsMenu from "../ChannelsMenu"

describe("ChannelsMenuTest", () => {
  beforeEach(async () => {
    render(
      <ChannelsMenu
        channels={channelData}
        activeChannel={channelData[0]}
        handleChannelChange={() => {}}
      />
    )
  })

  test("renders channel menus list", () => {
    const { getByText } = screen
    channelData.forEach((channel) => {
      const { name } = channel
      expect(getByText(name)).toBeDefined()
    })
  })

  test("handles menu click", async () => {})
})
