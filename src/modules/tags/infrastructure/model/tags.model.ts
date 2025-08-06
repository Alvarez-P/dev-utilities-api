import { BaseModelColumns } from 'src/core/infrastructure/model/base.model'
import { EntitySchema } from 'typeorm'
import { TAG_ENTITY_NAME } from '../../constants'
import { Tag } from '../../domain/entities/tags.entity'

export const TagModel = new EntitySchema<Tag>({
  target: Tag,
  name: TAG_ENTITY_NAME,
  columns: {
    ...BaseModelColumns,
    name: {
      type: 'varchar'
    },
    isEnabled: {
      type: 'boolean',
      default: true,
      nullable: false
    }
  },
  uniques: [
    {
      name: 'unique_name',
      columns: ['name', 'deletedAt']
    }
  ]
})
