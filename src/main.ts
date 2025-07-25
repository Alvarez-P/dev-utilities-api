import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const SERVER_PORT = 5000
  await app.listen(SERVER_PORT, () =>
    Logger.log(`Server running on port ${SERVER_PORT}`)
  )
}
bootstrap()
