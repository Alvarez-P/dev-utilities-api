import { Injectable } from '@nestjs/common'
import { BaseOptionOutputDto } from 'src/core/domain/dto/baseOption.dto'
import { ARList } from 'src/core/domain/types/api.interface'
import { SORT_DIRECTION } from 'src/core/domain/types/db.types'
import { IGetTagOptionsUseCase } from '../../domain/tags.use-cases'
import { TagRepository } from '../../infrastructure/repositories/tags.repository'

@Injectable()
export class GetTagOptionsUseCase implements IGetTagOptionsUseCase {
  constructor(private readonly tagRepository: TagRepository) {}

  public async execute(): Promise<ARList<BaseOptionOutputDto>> {
    const [options] = await this.tagRepository.findMany({
      order: { name: SORT_DIRECTION.ASC },
      where: { deletedAt: null, isEnabled: true }
    })
    return {
      data: options.map((s) => ({ label: s.name, value: s.id })),
      messages: []
    }
  }
}
