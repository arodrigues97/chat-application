import { render, screen } from "@testing-library/react"
import { ChangeEvent } from "react"
import { channelData, mockUser } from "../../../data/mockData"
import { ChatChannel } from "../../../types/ChatChannel"
import { ChatMessage } from "../../../types/ChatMessage"
import Channel from "../Channel"

describe("Channel Tests", () => {
  let activeChannel = channelData[0]
  beforeEach(async () => {
    render(
      <Channel
        channel={activeChannel}
        user={mockUser}
        fetching={false}
        handleLeaveChannel={function (channel: ChatChannel): void {
          throw new Error("Function not implemented.")
        }}
        hasUserJoinedChannel={function (
          channel: ChatChannel
        ): Promise<boolean> {
          throw new Error("Function not implemented.")
        }}
        chatSearch={{
          channel: undefined,
          searchText: "",
          searchResults: undefined,
          handleSearchChange: function (
            value: string,
            channel: ChatChannel
          ): void | undefined {
            throw new Error("Function not implemented.")
          },
        }}
        channelHistory={{
          channel: undefined,
          user: mockUser,
          editMessage: "",
          handleEditMessageChange: function (
            event: ChangeEvent<HTMLInputElement>
          ): void {
            throw new Error("Function not implemented.")
          },
          handleEditMessageSave: function (message: ChatMessage): void {
            throw new Error("Function not implemented.")
          },
          handleToggleEditMessage: function (message: ChatMessage): void {
            throw new Error("Function not implemented.")
          },
          handleDeleteMessage: function (message: ChatMessage): void {
            throw new Error("Function not implemented.")
          },
        }}
        chatBoxProps={{
          chatMessage: undefined,
          channel: activeChannel,
          handleChatMessageChange: function (
            event: ChangeEvent<HTMLInputElement>
          ): void {
            throw new Error("Function not implemented.")
          },
          handlePersistMessage: function (
            message: string | undefined,
            channel: ChatChannel
          ): void {
            throw new Error("Function not implemented.")
          },
        }}
      />
    )
  })

  test("channel name should render", async () => {
    const { getByText } = screen
    expect(getByText(channelData[0].name + " - Channel")).toBeDefined()
  })
})
