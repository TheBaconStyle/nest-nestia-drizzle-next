import { Inject, Injectable } from '@nestjs/common'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import * as schema from '@/database'
import { DB_TAG } from '@/database/config'

@Injectable()
export class AppService {
  constructor(
    @Inject(DB_TAG) private readonly drizzleDb: NodePgDatabase<typeof schema>,
  ) {}

  getHello() {
    return this.drizzleDb.query.users.findMany({
      columns: { email: true, password: true },
    })
    // return 'qweqweqwe'
  }
}
