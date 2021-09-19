import { render, screen } from "@testing-library/react"
import { ChangeEvent } from "react"
import { channelData, mockUser } from "../../../../data/data"
import { ChatMessage } from "../../../../types/ChatMessage"
import Channel from "../../Channel"
import ChatBubble from "../ChatBubble"

describe("Chat Bubble", () => {
  test("chat bubble content renders", async () => {
    const message = channelData[0].messages[0]
    render(
      <ChatBubble
        user={mockUser}
        message={message}
        editMessage={undefined}
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
    const { getByText } = screen
    if (message.message.length > 0) {
      expect(getByText(message.message)).toBeDefined()
    }
    expect(getByText(message.user.name)).toBeDefined()
    expect(getByText(message.timeStamp)).toBeDefined()
  })
})
