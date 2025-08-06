import { BaseEntity } from 'src/core/domain/entities/base.entity'
import { ModelTarget } from 'src/core/domain/types/db.types'
import {
  DeepPartial,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  UpdateResult
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { TransactionalRepository } from './transactional.repository'

export abstract class BaseRepository<E extends BaseEntity> {
  constructor(
    protected tx: TransactionalRepository,
    private readonly model: ModelTarget<E>
  ) {}

  public create<T extends DeepPartial<E>>(entity: T): Promise<T & E> {
    return this.tx.getRepository(this.model).save(entity)
  }

  public findOne(options: FindOneOptions<E>): Promise<E | null> {
    return this.tx.getRepository(this.model).findOne(options)
  }

  public findMany(options: FindManyOptions<E>): Promise<[E[], number]> {
    return this.tx.getRepository(this.model).findAndCount(options)
  }

  public updateOne(
    id: string,
    item: QueryDeepPartialEntity<E>
  ): Promise<UpdateResult> {
    return this.tx.getRepository(this.model).update(id, item)
  }

  public deleteOne(
    id: string,
    sessionUser: string,
    isSoftDelete = true
  ): Promise<UpdateResult | DeleteResult> {
    if (!isSoftDelete) return this.tx.getRepository(this.model).delete(id)
    return this.tx.getRepository(this.model).update(id, {
      deletedBy: sessionUser,
      deletedAt: new Date()
    } as unknown as QueryDeepPartialEntity<E>)
  }
}
