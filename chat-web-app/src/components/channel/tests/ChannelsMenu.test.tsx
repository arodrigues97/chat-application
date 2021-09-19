import { render, screen, fireEvent } from "@testing-library/react"
import { mount } from "enzyme"
import { channelData, mockUser } from "../../../data/mockData"
import { ChatChannel } from "../../../types/ChatChannel"
import ChannelsMenu from "../ChannelsMenu"

describe("ChannelsMenuTest", () => {
  let activeChannel: ChatChannel | undefined

  const component = (
    <ChannelsMenu
      channels={channelData}
      activeChannel={activeChannel}
      handleChannelChange={(channel: ChatChannel) => {
        activeChannel = channel
      }}
      handleJoinChannel={function (channel: ChatChannel): void {
        throw new Error("Function not implemented.")
      }}
      user={mockUser}
    />
  )

  /**
   * Ensures a successfull render
   */
  it("should render", () => {
    const wrapper = render(component)
    expect(wrapper).toMatchSnapshot()
  })

  /**
   * Ensures all the menu links get rendered
   */
  test("renders channel menus list and handles click event", () => {
    let wrapper = mount(component)
    channelData.forEach((channel) => {
      let menuItem = wrapper.find("#menu-" + channel.id)
      expect(menuItem.exists()).toBeTruthy()
      expect(menuItem.at(0).text()).toBe(channel.name + channel.users.length)
      menuItem.at(0).simulate("click")
      expect(activeChannel).toBe(channel)
    })
  })
})
