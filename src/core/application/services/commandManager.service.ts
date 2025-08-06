import { Injectable } from '@nestjs/common'
import { Command } from 'src/core/domain/types/command.interface'

@Injectable()
export class CommandManagerService {
  private executed: Command[] = []

  async execute(command: Command) {
    const r = command.execute()
    if (r instanceof Promise) await r
    this.executed.push(command)
  }

  async undo() {
    for (const c of this.executed) {
      const r = c.undo()
      if (r instanceof Promise) await r
    }
  }

  clear() {
    this.executed = []
  }
}
