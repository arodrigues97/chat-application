import { mount } from "enzyme"
import { ChangeEvent } from "react"
import CreateChannel from "../CreateChannel"

describe("CreateChannel", () => {
  let channelName = ""
  let channelCreated = false
  const component = (
    <CreateChannel
      channelName={channelName}
      handleChannelNameChange={function (
        event: ChangeEvent<HTMLInputElement>
      ): void {
        channelName = event.target.value
      }}
      handleCreateChannel={function (): void {
        channelCreated = true
      }}
    />
  )

  let wrapper: any

  beforeEach(() => {
    wrapper = mount(component)
  })

  it("should render initial layout", () => {
    expect(wrapper.getElement()).toMatchSnapshot()
  })

  it("renders create button", () => {
    const createButton = wrapper.find("button")
    const label = createButton.text()
    expect(label).toEqual("Create Channel")
  })

  it("create button click should open modal", () => {
    const createButton = wrapper.find("button")
    createButton.simulate("click")
    expect(wrapper.find("form").length).toBe(1)
  })

  it("handles channel name input", () => {
    const createButton = wrapper.find("button")
    createButton.simulate("click")
    const channelNameInput = wrapper.find("input").at(0)
    channelNameInput.instance().value = "Test"
    channelNameInput.simulate("change")
    expect(channelName).toBe("Test")
  })

  it("handles channel create button", () => {
    const createButton = wrapper.find("button")
    createButton.simulate("click")
    const channelNameInput = wrapper.find("input").at(0)
    channelNameInput.instance().value = "Test"
    channelNameInput.simulate("change")
    wrapper.find("button").at(1).simulate("click")
    expect(channelCreated).toBe(true)
  })
})
