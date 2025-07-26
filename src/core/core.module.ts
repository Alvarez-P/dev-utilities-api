import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ConfigEnvService } from './application/services/config.service'
import { ConfigEnvSchema } from './domain/types/env.interface'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => ConfigEnvSchema.parse(env),
      isGlobal: false
    })
  ],
  providers: [ConfigEnvService],
  exports: [ConfigEnvService]
})
export class CoreModule {}
