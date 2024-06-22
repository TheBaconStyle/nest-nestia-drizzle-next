import { users } from '@/database'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const selectUserSchema = createSelectSchema(users)

export const insertUserSchema = createInsertSchema(users)

export type TSelectUser = z.infer<typeof selectUserSchema>

export type TInsertUser = z.infer<typeof insertUserSchema>
