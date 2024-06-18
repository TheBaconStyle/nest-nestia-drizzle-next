import z from 'zod'
import { createQuestionSchema } from './createQuestion.schema'

export const updateQuestionSchema = createQuestionSchema.partial().extend({
  id: z.string().uuid(),
})

export type TUpdateQuestionSChema = z.infer<typeof updateQuestionSchema>
