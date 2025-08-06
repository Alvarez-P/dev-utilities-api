import { Injectable } from '@nestjs/common'
import { PersistenceProvider } from 'src/core/infrastructure/persistence/connection.provider'
import { DataSource, EntityManager } from 'typeorm'

@Injectable()
export class UnitOfWork {
  private transactionManager: EntityManager | null

  constructor(private persistenceProvider: PersistenceProvider) {}

  getConnection(): DataSource {
    return this.persistenceProvider.getClient()
  }

  getTransactionManager(): EntityManager {
    return this.transactionManager ?? this.getConnection().manager
  }

  setTransactionManager(tx: EntityManager | null) {
    this.transactionManager = tx
  }

  async withTransaction<T>(work: () => Promise<T>) {
    const queryRunner = this.getConnection().createQueryRunner()
    await queryRunner.startTransaction()
    this.setTransactionManager(queryRunner.manager)
    let error: unknown | null = null
    try {
      const result: T = await work()
      await queryRunner.commitTransaction()
      return result
    } catch (e: unknown) {
      error = e
      await queryRunner.rollbackTransaction()
    } finally {
      await queryRunner.release()
      this.setTransactionManager(null)
    }
    throw error
  }
}
