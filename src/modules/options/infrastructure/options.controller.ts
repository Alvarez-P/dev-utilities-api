import { Controller, Get } from '@nestjs/common'
import { BaseOptionOutputDto } from 'src/core/domain/dto/baseOption.dto'
import { ARList } from 'src/core/domain/types/api.interface'
import { GetTagOptionsUseCase } from 'src/modules/tags/application/use-cases/getTagOptions.use-case'

@Controller('options')
export class OptionsController {
  constructor(private readonly getTagOptionsUseCase: GetTagOptionsUseCase) {}

  @Get('tags')
  getTagOptions(): Promise<ARList<BaseOptionOutputDto>> {
    return this.getTagOptionsUseCase.execute()
  }
}
