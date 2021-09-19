import { ChangeEvent } from "react"
import { channelData, mockUser } from "../../data/mockData"
import { ChatChannel } from "../../types/ChatChannel"
import { ChatMessage } from "../../types/ChatMessage"
import App from "../App"
import { shallow } from "enzyme"

describe("App", () => {
  const app = (
    <App
      user={mockUser}
      fetching={false}
      channels={channelData}
      channelProps={{
        channel: undefined,
        user: mockUser,
        fetching: false,
        chatBoxProps: {
          channel: channelData[0],
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
        },
        channelHistory: {
          user: mockUser,
          channel: channelData[0],
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
      setError={function (error: string | undefined): void {
        throw new Error("Function not implemented.")
      }}
      handleChannelChange={function (channel: ChatChannel): void {
        throw new Error("Function not implemented.")
      }}
      handleJoinChannel={function (channel: ChatChannel): void {
        throw new Error("Function not implemented.")
      }}
      createChannelProps={{
        channelName: "",
        handleChannelNameChange: function (
          event: ChangeEvent<HTMLInputElement>
        ): void {
          throw new Error("Function not implemented.")
        },
        handleCreateChannel: function (): void {
          throw new Error("Function not implemented.")
        },
      }}
    />
  )

  test("renders app without crashing", () => {
    shallow(app)
  })
})
