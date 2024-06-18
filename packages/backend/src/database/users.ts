import { uuid, varchar } from 'drizzle-orm/pg-core'
import { umbridgeSchema } from './schema'

export const users = umbridgeSchema.table('users', {
  id: uuid('id').primaryKey(),
  email: varchar('email').notNull(),
  password: varchar('password').notNull(),
  firstName: varchar('firstName'),
  middleName: varchar('middleName'),
  lastName: varchar('lastName'),
})
