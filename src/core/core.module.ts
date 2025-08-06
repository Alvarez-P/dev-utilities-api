import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CommandManagerService } from './application/services/commandManager.service'
import { ConfigEnvService } from './application/services/config.service'
import { UnitOfWork } from './application/services/unitOfWork.service'
import { ConfigEnvSchema } from './domain/types/env.interface'
import { PersistenceProvider } from './infrastructure/persistence/connection.provider'
import { TransactionalRepository } from './infrastructure/repositories/transactional.repository'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => ConfigEnvSchema.parse(env),
      isGlobal: false
    })
  ],
  providers: [
    ConfigEnvService,
    PersistenceProvider,
    CommandManagerService,
    TransactionalRepository,
    UnitOfWork
  ],
  exports: [
    ConfigEnvService,
    CommandManagerService,
    TransactionalRepository,
    UnitOfWork
  ]
})
export class CoreModule {}
