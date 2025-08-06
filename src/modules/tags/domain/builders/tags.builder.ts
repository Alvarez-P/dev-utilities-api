import { BaseEntityBuilder } from 'src/core/domain/builders/baseEntity.builder'
import { Tag } from '../entities/tags.entity'

export class TagBuilder extends BaseEntityBuilder<Tag> {
  private readonly tag: Tag

  constructor(tag?: Tag) {
    const m = tag
      ? new Tag(
          tag.id,
          tag.name,
          tag.isEnabled,
          tag.createdAt,
          tag.createdBy,
          tag.updatedAt,
          tag.updatedBy,
          tag.deletedAt,
          tag.deletedBy
        )
      : new Tag('', '', true, new Date(), '', null, null, null, null)
    super(m)
    this.tag = m
  }

  name(name: string) {
    this.tag.name = name
    return this
  }

  isEnabled(isEnabled: boolean) {
    this.tag.isEnabled = isEnabled
    return this
  }

  build(): Tag {
    return { ...this.tag }
  }

  clone() {
    return new TagBuilder(this.tag)
  }
}
