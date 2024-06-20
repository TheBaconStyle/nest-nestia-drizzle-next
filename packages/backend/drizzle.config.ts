import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'

config()

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    ssl: false,
  },
  schema: './src/database/schema.ts',
  out: './migrations',
})
