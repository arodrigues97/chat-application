import axios from "axios"
import { GiphySuggestion } from "../types/GiphySuggestion"
import { User } from "../types/User"
import { ChatChannel } from "../types/ChatChannel"
import { ChatMessage } from "../types/ChatMessage"

const url = "http://localhost:3000"

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
    const response = await getAxiosByType<T>(type, path, body)
    return {
      data: response.data,
    }
  } catch (error: any) {
    console.log(error)
    return {
      error: "There was an error sending an http request.",
    }
  }
}

const getAxiosByType = async <T>(type: string, path: string, body: any) => {
  const urlPath = url + path
  switch (type) {
    case "GET":
      return await axios.get<T>(urlPath)
    case "POST":
      return await axios.post<T>(urlPath, body)
    case "PUT":
      return await axios.put<T>(urlPath, body)
    case "DELETE":
      return await axios.delete<T>(urlPath, body)
    default:
      throw Error("Invalid HTTP type!")
  }
}

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
    "/channels/" + channel.id + "/user_joined/user_id=" + user.id,
    undefined
  )
}

export type UserJoinedResponse = {
  joined: boolean
}

export const joinChannel = async (
  channel: ChatChannel,
  user: User
): Promise<AxiosResponse<ChatChannel>> => {
  return await sendHttpRequest(
    "POST",
    "/channels/" + channel.id + "/join?user_id=" + user.id,
    undefined
  )
}

export const sendPersistMessage = async (
  channel: ChatChannel,
  message: string,
  user: User
): Promise<AxiosResponse<ChatMessage>> => {
  return await sendHttpRequest("POST", "/messages", {
    user_id: user.id,
    channel_id: channel.id,
    message: message,
  })
}

export const sendDeleteMessage = async (
  message: ChatMessage
): Promise<AxiosResponse<ChatMessage>> => {
  return await sendHttpRequest("DELETE", "/messages/" + message.id, {
    id: message.id,
  })
}

export const sendEditMessage = async (
  message: ChatMessage,
  newMessage: string
): Promise<AxiosResponse<ChatMessage>> => {
  return await sendHttpRequest("PUT", "/messages/" + message.id, {
    id: message.id,
    message: newMessage,
  })
}

export const createChannel = async (
  name: string,
  user: User
): Promise<AxiosResponse<ChatChannel>> => {
  return await sendHttpRequest("POST", "/channels", {
    user_id: user.id,
    name: name,
  })
}
