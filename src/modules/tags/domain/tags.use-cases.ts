import { BaseOptionOutputDto } from 'src/core/domain/dto/baseOption.dto'
import { ARList } from 'src/core/domain/types/api.interface'
import { UseCase } from 'src/core/domain/types/blueprints.types'

export interface IGetTagOptionsUseCase extends UseCase<BaseOptionOutputDto> {
  execute(): Promise<ARList<BaseOptionOutputDto>>
}
