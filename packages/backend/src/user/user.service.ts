import { DB_TAG } from '@/database/config'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import * as schema from '@/database'
import { TInsertUser } from '@/schema'

@Injectable()
export class UserService {
  logger = new Logger(UserService.name)

  constructor(
    @Inject(DB_TAG) private readonly drizzleDb: NodePgDatabase<typeof schema>,
  ) {}

  async findByEmail(email: string) {
    return await this.drizzleDb.query.users.findFirst({
      columns: { password: false },
      where: (usr, { eq }) => eq(usr.email, email),
    })
  }

  async create(userData: TInsertUser) {
    const users = await this.drizzleDb
      .insert(schema.users)
      .values(userData)
      .returning({ id: schema.users.id })
    this.logger.log(`${users.length} users successfully created`)
    return users
  }
}
