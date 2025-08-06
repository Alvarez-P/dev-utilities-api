import { BaseEntity } from 'src/core/domain/entities/base.entity'
import { EntitySchemaColumnOptions } from 'typeorm'

export const BaseModelColumns: Record<
  keyof BaseEntity,
  EntitySchemaColumnOptions
> = {
  id: {
    type: 'uuid',
    primary: true,
    generated: 'uuid'
  },
  createdAt: {
    type: 'timestamp with time zone',
    name: 'created_at',
    createDate: true
  },
  createdBy: {
    type: 'varchar',
    name: 'created_by'
  },
  updatedAt: {
    type: 'timestamp with time zone',
    name: 'updated_at',
    updateDate: true,
    nullable: true
  },
  updatedBy: {
    type: 'varchar',
    name: 'updated_by',
    nullable: true
  },
  deletedAt: {
    type: 'timestamp with time zone',
    name: 'deleted_at',
    deleteDate: true,
    nullable: true
  },
  deletedBy: {
    type: 'varchar',
    name: 'deleted_by',
    nullable: true
  }
}
