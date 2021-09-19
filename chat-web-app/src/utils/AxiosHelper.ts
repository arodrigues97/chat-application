import axios from "axios"
import { ChatMessage } from "../types/ChatMessage"
import { GiphySuggestion } from "../types/GiphySuggestion"
import { User } from "../types/User"
import { ChatChannel } from "./../types/ChatChannel"

const url = "http://localhost:3000/"

export type AxiosResponse<T> = {
  error?: string
  data?: T
}

const sendHttpRequest = async <T>(
  type: string,
  path: string,
  body: any | undefined
): Promise<AxiosResponse<T>> => {
  try {
    const response = await getAxios<T>(type, path, body)
    return {
      data: response.data,
    }
  } catch (error: any) {
    if (error.response) {
      return {
        error: error.response,
      }
    }
    return {
      error: "There was an error sending the http request.",
    }
  }
}

const getAxios = async <T>(type: string, path: string, body: any) => {
  const urlPath = url + path
  switch (type) {
    case "GET":
      return await axios.get<T>(urlPath)
    case "POST":
      return await axios.post<T>(urlPath, body)
    case "UPDATE":
      return await axios.post<T>(urlPath, body)
  }
  return await axios.get<T>(urlPath)
}

export const persistMessage = (message: ChatMessage) => {}

export const updateChatMessage = (message: ChatMessage) => {}

export const getChatMessage = (id: number) => {}

export const deleteMessage = () => {}

export const getChannelHistory = () => {}

export const getChannels = async (): Promise<AxiosResponse<ChatChannel[]>> => {
  return await sendHttpRequest("GET", "/channels", undefined)
}

export const getGiphySuggestions = async (
  search: string
): Promise<AxiosResponse<GiphySuggestion>> => {
  return await sendHttpRequest(
    "GET",
    "/giphy/suggestion?search=" + search,
    undefined
  )
}

export const getUserJoinedChannel = async (
  channel: ChatChannel,
  user: User
): Promise<AxiosResponse<UserJoinedResponse>> => {
  return await sendHttpRequest(
    "GET",
    "/channels/" + channel.id + "/user_joined?user_id=" + user.id,
    undefined
  )
}

export type UserJoinedResponse = {
  joined: boolean
}

export const joinChannel = async (
  channel: ChatChannel,
  user: User
): Promise<AxiosResponse<JoinChannelResponse>> => {
  return await sendHttpRequest(
    "POST",
    "/channels/" + channel.id + "/join?user_id=" + user.id,
    undefined
  )
}

export type JoinChannelResponse = {
  message?: string
  joined?: {
    channelId: number
    userId: number
  }
}
