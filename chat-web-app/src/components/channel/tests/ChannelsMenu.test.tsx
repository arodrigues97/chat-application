import { render, screen, fireEvent } from "@testing-library/react"
import { channelData, mockUser } from "../../../data/data"
import { ChatChannel } from "../../../types/ChatChannel"
import ChannelsMenu from "../ChannelsMenu"

describe("ChannelsMenuTest", () => {
  beforeEach(async () => {
    render(
      <ChannelsMenu
        channels={channelData}
        activeChannel={channelData[0]}
        handleChannelChange={() => {}}
        handleJoinChannel={function (channel: ChatChannel): void {
          throw new Error("Function not implemented.")
        }}
        user={mockUser}
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
})
