import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { ConfigService } from '@nestjs/config'
import * as docs from './swagger/swagger.json'
import { SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)

  const PORT = config.getOrThrow<number>('PORT')

  if (config.get('NODE_ENV') !== 'production') {
    SwaggerModule.setup('docs', app, docs)
  }

  await app.listen(PORT)
}

bootstrap()
