import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    database: 'umbridge',
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    ssl: false,
  },
  schema: './src/database/schema.ts',
  out: './migrations',
})
