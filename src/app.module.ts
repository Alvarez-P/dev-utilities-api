import { Module } from '@nestjs/common'
import { CoreModule } from './core/core.module'
import { OptionsModule } from './modules/options/options.module'
import { TagsModule } from './modules/tags/tags.module'

@Module({
  imports: [CoreModule, TagsModule, OptionsModule],
  controllers: []
})
export class AppModule {}
