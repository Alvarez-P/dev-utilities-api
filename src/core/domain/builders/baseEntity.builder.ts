import { BaseEntity } from '../entities/base.entity'

export abstract class BaseEntityBuilder<T extends BaseEntity> {
  private readonly entity: T

  protected constructor(entity: T) {
    this.entity = entity
  }

  id(id: string) {
    this.entity.id = id
    return this
  }

  createdAt(createdAt: Date) {
    this.entity.createdAt = createdAt
    return this
  }

  createdBy(createdBy: string) {
    this.entity.createdBy = createdBy
    return this
  }

  updatedAt(updatedAt: Date | null) {
    this.entity.updatedAt = updatedAt
    return this
  }

  updatedBy(updatedBy: string | null) {
    this.entity.updatedBy = updatedBy
    return this
  }

  deletedAt(deletedAt: Date | null) {
    this.entity.deletedAt = deletedAt
    return this
  }

  deletedBy(deletedBy: string | null) {
    this.entity.deletedBy = deletedBy
    return this
  }

  abstract build(): T
  abstract clone(): BaseEntityBuilder<T>
  excludeAndBuild<ToExclude extends (keyof T)[]>(
    exclude: ToExclude
  ): Omit<T, ToExclude[number]> {
    const entity = { ...this.entity }
    if (exclude?.length) {
      for (const key of exclude) delete entity[key]
    }
    return entity
  }
}
