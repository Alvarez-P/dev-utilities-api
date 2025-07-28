import { ApiMessage } from '../types/api.interface'

export class HttpException extends Error {
  public statusCode: number
  public messages: ApiMessage[]

  constructor(
    messages: string | ApiMessage | ApiMessage[],
    statusCode: number,
    ...params: (string | undefined)[]
  ) {
    super(...params)
    this.messages =
      typeof messages === 'string'
        ? [{ text: messages, type: 'error' }]
        : Array.isArray(messages)
          ? messages
          : [messages]
    this.statusCode = statusCode
  }
}
