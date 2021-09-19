import { render, screen } from "@testing-library/react"
import { ChangeEvent } from "react"
import { channelData, mockUser } from "../../../data/mockData"
import { ChatMessage } from "../../../types/ChatMessage"
import ChannelHistory from "../ChannelHistory"
import { mount } from "enzyme"

describe("Channel History Tests", () => {
  let activeChannel = channelData[0]
  let wrapper: any
  beforeEach(() => {
    wrapper = render(
      <ChannelHistory
        channel={activeChannel}
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

  it("should render", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("renders messages", () => {
    const { getAllByText } = screen
    activeChannel.messages.forEach((message) => {
      expect(getAllByText(message.message)).toBeDefined()
    })
  })

  it("no messages text", () => {
    render(
      <ChannelHistory
        channel={{
          ...activeChannel,
          messages: [],
        }}
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
    const { getByText } = screen
    expect(getByText("No messages"))
  })
})
