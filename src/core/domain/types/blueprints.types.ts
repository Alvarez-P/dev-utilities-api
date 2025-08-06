import { AR, ARList } from './api.interface'

export interface UseCase<TOutput> {
  execute(...args: any[]): Promise<AR<TOutput> | ARList<TOutput>>
}

export interface Resolver<TOutput> {
  resolve(...args: any[]): Promise<TOutput> | TOutput
}
