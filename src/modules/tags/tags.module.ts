import { Module } from '@nestjs/common'
import { GetTagOptionsUseCase } from './application/use-cases/getTagOptions.use-case'
import { TagRepository } from './infrastructure/repositories/tags.repository'
import { TagsController } from './infrastructure/tags.controller'

@Module({
  providers: [TagRepository, GetTagOptionsUseCase],
  exports: [GetTagOptionsUseCase],
  controllers: [TagsController]
})
export class TagsModule {}
