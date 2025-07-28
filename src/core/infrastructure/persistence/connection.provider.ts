import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigEnvService } from 'src/core/application/services/config.service'
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
        entities: [],
        synchronize: true
      })

      const connection = await dataSource.initialize()
      return connection
    } catch (error) {
      throw new Error(`Error connecting to database: ${error.message}`)
    }
  }

  async createClient(): Promise<DataSource> {
    if (!this.dataSource) this.dataSource = await this.onModuleInit()
    return this.dataSource
  }
}
