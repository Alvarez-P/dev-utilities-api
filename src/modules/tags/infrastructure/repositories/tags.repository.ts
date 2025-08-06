import { Injectable } from '@nestjs/common'
import { BaseRepository } from 'src/core/infrastructure/repositories/base.repository'
import { TransactionalRepository } from 'src/core/infrastructure/repositories/transactional.repository'
import { TAG_ENTITY_NAME } from '../../constants'
import { Tag } from '../../domain/entities/tags.entity'

@Injectable()
export class TagRepository extends BaseRepository<Tag> {
  constructor(protected tx: TransactionalRepository) {
    super(tx, TAG_ENTITY_NAME)
  }
}
