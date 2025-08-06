import { Injectable } from '@nestjs/common'
import { UnitOfWork } from 'src/core/application/services/unitOfWork.service'
import { ModelTarget, Target } from 'src/core/domain/types/db.types'
import { Repository } from 'typeorm'

@Injectable()
export class TransactionalRepository {
  constructor(private uow: UnitOfWork) {}

  getRepository<T extends Target>(target: ModelTarget<T>): Repository<T> {
    const transactionManager = this.uow.getTransactionManager()
    return transactionManager.getRepository(target)
  }
}
