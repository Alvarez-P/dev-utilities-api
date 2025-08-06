import { Module } from '@nestjs/common'
import { TagsModule } from '../tags/tags.module'
import { OptionsController } from './infrastructure/options.controller'

@Module({
  imports: [TagsModule],
  controllers: [OptionsController]
})
export class OptionsModule {}
