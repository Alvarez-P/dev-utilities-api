import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import {
  ConfigEnv,
  EnvironmentVariables
} from 'src/core/domain/types/env.interface'

@Injectable()
export class ConfigEnvService {
  constructor(private readonly configService: ConfigService<ConfigEnv, true>) {}

  get<K extends EnvironmentVariables>(key: K) {
    return this.configService.get<ConfigEnv[typeof key]>(key)
  }
}
