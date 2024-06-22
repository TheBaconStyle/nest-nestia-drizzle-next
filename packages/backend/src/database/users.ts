import { uuid, varchar } from 'drizzle-orm/pg-core'
import { exampleSchema } from './schema'

export const users = exampleSchema.table('users', {
  id: uuid('id').default('gen_random_uuid()').primaryKey(),
  email: varchar('email').notNull(),
  password: varchar('password').notNull(),
  firstName: varchar('firstName'),
  middleName: varchar('middleName'),
  lastName: varchar('lastName'),
})
