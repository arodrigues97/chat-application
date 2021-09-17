import { render, screen } from "@testing-library/react"
import { channelData } from "../../data/data"
import { ChatChannel } from "../../types/ChatChannel"
import App from "../App"

it("renders app without crashing", () => {
  render(<App channels={[]} handleChannelChange={(channel) => {}} />)
})

test("returns true if no menu rendered", () => {
  render(<App channels={[]} handleChannelChange={(channel) => {}} />)
  const { getByText } = screen
  expect(getByText("There are no channels available.")).toBeDefined()
})

//There are no channels available.
