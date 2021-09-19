import { render, screen } from "@testing-library/react"
import { ChangeEvent } from "react"
import { channelData, mockUser } from "../../../data/data"
import { ChatMessage } from "../../../types/ChatMessage"
import ChannelHistory from "../ChannelHistory"

describe("Channel History Tests", () => {
  beforeEach(async () => {
    render(
      <ChannelHistory
        channel={channelData[0]}
        user={mockUser}
        editMessage={""}
        handleEditMessageChange={function (
          event: ChangeEvent<HTMLInputElement>
        ): void {
          throw new Error("Function not implemented.")
        }}
        handleEditMessageSave={function (message: ChatMessage): void {
          throw new Error("Function not implemented.")
        }}
        handleToggleEditMessage={function (message: ChatMessage): void {
          throw new Error("Function not implemented.")
        }}
        handleDeleteMessage={function (message: ChatMessage): void {
          throw new Error("Function not implemented.")
        }}
      />
    )
  })

  it("renders messages", () => {
    const { getAllByText } = screen
    channelData[0].messages.forEach((message) => {
      expect(getAllByText(message.message)).toBeDefined()
    })
  })
})
