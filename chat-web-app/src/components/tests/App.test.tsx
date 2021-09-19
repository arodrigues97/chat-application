import { render, screen } from "@testing-library/react"
import { ChangeEvent } from "react"
import { channelData, mockUser } from "../../data/data"
import { ChatChannel } from "../../types/ChatChannel"
import { ChatMessage } from "../../types/ChatMessage"
import App from "../App"

// it("renders app without crashing", () => {
//   render(
//     <App channels={[]} handleChannelChange={(channel) => {}} user={mockUser} />
//   )
// })

// test("returns true if no menu rendered", () => {
//   render(<App channels={[]} handleChannelChange={(channel) => {}} />)
//   const { getByText } = screen
//   expect(getByText("There are no channels available.")).toBeDefined()
// })

//There are no channels available.

describe("App component main tests", () => {
  const app = (
    <App
      user={mockUser}
      fetching={false}
      channels={channelData}
      channelProps={{
        channel: undefined,
        user: {
          id: 0,
          name: "",
        },
        fetching: false,
        chatMessage: "",
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
        editMessage: "",
        handleToggleEditMessage: function (message: ChatMessage): void {
          throw new Error("Function not implemented.")
        },
        handleEditMessageChange: function (
          event: ChangeEvent<HTMLInputElement>
        ): void {
          throw new Error("Function not implemented.")
        },
        handleEditMessageSave: function (message: ChatMessage): void {
          throw new Error("Function not implemented.")
        },
        handleDeleteMessage: function (message: ChatMessage): void {
          throw new Error("Function not implemented.")
        },
        handleLeaveChannel: function (channel: ChatChannel): void {
          throw new Error("Function not implemented.")
        },
        hasUserJoinedChannel: function (
          channel: ChatChannel
        ): Promise<boolean> {
          throw new Error("Function not implemented.")
        },
        chatSearch: {
          channel: undefined,
          searchText: "",
          searchResults: undefined,
          handleSearchChange: function (
            value: string,
            channel: ChatChannel
          ): void | undefined {
            throw new Error("Function not implemented.")
          },
        },
      }}
      activeChannel={undefined}
      error={undefined}
      channelName={undefined}
      handleChannelNameChange={function (
        event: ChangeEvent<HTMLInputElement>
      ): void {
        throw new Error("Function not implemented.")
      }}
      setError={function (error: string | undefined): void {
        throw new Error("Function not implemented.")
      }}
      handleChannelChange={function (channel: ChatChannel): void {
        throw new Error("Function not implemented.")
      }}
      handleJoinChannel={function (channel: ChatChannel): void {
        throw new Error("Function not implemented.")
      }}
      handleCreateChannel={function (): void {
        throw new Error("Function not implemented.")
      }}
    />
  )

  test("renders app without crashing", () => {
    render(app)
  })
})
