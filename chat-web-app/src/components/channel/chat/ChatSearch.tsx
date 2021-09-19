import { Search } from "semantic-ui-react"
import { ChatChannel } from "../../../types/ChatChannel"
import { ChatMessage } from "../../../types/ChatMessage"

export type ChatSearchProps = {
  channel: ChatChannel | undefined
  searchText: string
  searchResults: ChatMessage[] | undefined
  handleSearchChange: (value: string, channel: ChatChannel) => void | undefined
}

const ChatSearch = (props: ChatSearchProps) => {
  const { channel, searchText, searchResults, handleSearchChange } = props
  if (!channel) {
    return <div>Invalid prop data passed!</div>
  }
  return (
    <Search
      aligned="right"
      onSearchChange={(_, data) =>
        handleSearchChange(data.value ? data.value : "", channel)
      }
      results={
        searchResults
          ? searchResults.map((message) => ({
              key: message.id,
              title: message.user.name,
              description: message.message,
              price: message.timeStamp,
            }))
          : []
      }
      value={searchText}
    />
  )
}

export default ChatSearch
