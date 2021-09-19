import { act, render, screen } from "@testing-library/react"
import { mount } from "enzyme"
import { text } from "node:stream/consumers"
import { ChangeEvent } from "react"
import { channelData, mockUser } from "../../../../data/mockData"
import { ChatMessage } from "../../../../types/ChatMessage"
import ChatBubble from "../ChatBubble"

describe("Chat Bubble", () => {
  let activeChannel = { ...channelData[0] }

  let message = activeChannel.messages[0]

  const component = (
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
        message.editing = true
      }}
      handleDeleteMessage={function (message: ChatMessage): void {
        activeChannel.messages = activeChannel.messages.filter(
          (m) => m.id !== message.id
        )
      }}
    />
  )

  test("render content", () => {
    render(component)
    const { getByText } = screen
    if (message.message.length > 0) {
      expect(getByText(message.message)).toBeDefined()
    }
    expect(getByText(message.user.name)).toBeDefined()
    expect(getByText(message.timeStamp)).toBeDefined()
  })

  test("toggle edit", () => {
    const wrapper = mount(component)
    wrapper.find("#edit-icon").at(1).simulate("click")
    expect(message.editing).toBe(true)
  })

  test("on toggle display form", () => {
    const wrapper = mount(component)
    expect(wrapper.find("form").exists()).toBeTruthy()
  })

  test("delete message", () => {
    const wrapper = mount(component)
    wrapper.find(".close").at(0).simulate("click")
    expect(
      activeChannel.messages.find((m) => m.id === message.id)
    ).toBeUndefined()
  })
})
