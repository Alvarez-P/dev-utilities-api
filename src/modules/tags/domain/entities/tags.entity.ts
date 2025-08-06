import { BaseEntity } from 'src/core/domain/entities/base.entity'

export class Tag extends BaseEntity {
  name: string
  isEnabled: boolean

  constructor(
    id: string,
    name: string,
    isEnabled: boolean,
    createdAt: Date,
    createdBy: string,
    updatedAt: Date | null,
    updatedBy: string | null,
    deletedAt: Date | null,
    deletedBy: string | null
  ) {
    super(id, createdAt, createdBy, updatedAt, updatedBy, deletedAt, deletedBy)
    this.name = name
    this.isEnabled = isEnabled
  }
}
