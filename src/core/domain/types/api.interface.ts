export type MessageType = 'success' | 'warning' | 'error' | 'info'

export interface ApiMessage {
  text: string
  type: MessageType
}

export interface ApiResponse<T = null> {
  data: T | null
  messages: ApiMessage[]
}

export interface ApiResponseList<T = null> {
  data: T[] | null
  messages: ApiMessage[]
}

export type AR<T = null> = ApiResponse<T>
export type ARList<T = null> = ApiResponseList<T>
