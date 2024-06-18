import { INestiaConfig } from '@nestia/sdk'
import { config } from 'dotenv'

config()

const NESTIA_CONFIG: INestiaConfig = {
  input: 'src/**/*.controller.ts',
  output: '../sdk/src',
  swagger: {
    output: 'src/swagger/swagger.json',
    beautify: true,
    servers: [{ url: `http://localhost:${process.env.PORT}` }],
  },
  distribute: '../sdk',
  primitive: true,
  simulate: true,
  assert: true,
  clone: true,
}

export default NESTIA_CONFIG
