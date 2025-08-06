import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigEnvService } from 'src/core/application/services/config.service'
import { TagModel } from 'src/modules/tags/infrastructure/model/tags.model'
import { DataSource } from 'typeorm'

@Injectable()
export class PersistenceProvider implements OnModuleInit {
  private dataSource: DataSource | null = null
  constructor(private configService: ConfigEnvService) {}

  async onModuleInit() {
    try {
      const dataSource = new DataSource({
        type: 'postgres',
        host: this.configService.get('DB_HOST'),
        port: this.configService.get('DB_PORT'),
        username: this.configService.get('DB_USER'),
        password: this.configService.get('DB_PASSWORD'),
        database: this.configService.get('DB_NAME'),
        entities: [TagModel],
        synchronize: true
      })
      const connection = await dataSource.initialize()
      this.dataSource = connection
    } catch (error) {
      throw new Error(`Error connecting to database: ${error.message}`)
    }
  }

  getClient(): DataSource {
    if (!this.dataSource) {
      throw new Error('DataSource is not initialized')
    }
    return this.dataSource
  }
}
