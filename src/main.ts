import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigEnvService } from './core/application/services/config.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigEnvService)

  app.enableCors()
  app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'))

  const SERVER_PORT = configService.get('SERVER_PORT')
  await app.listen(SERVER_PORT, () =>
    Logger.log(`Server running on port ${SERVER_PORT}`)
  )
}
bootstrap()
