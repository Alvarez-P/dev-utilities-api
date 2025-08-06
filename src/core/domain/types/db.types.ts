import { EntityTarget, ObjectLiteral } from 'typeorm'

export type Target = ObjectLiteral
export type ModelTarget<E extends ObjectLiteral> = EntityTarget<E>

export enum SORT_DIRECTION {
  ASC = 'ASC',
  DESC = 'DESC'
}
