import z from 'zod'

export const signInSchema = z.object({
  identifier: z.string().min(8),
  password: z.string().min(1),
})

export type TSignInData = z.infer<typeof signInSchema>
