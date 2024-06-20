import { Logger, Module, OnApplicationBootstrap } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg'
import * as schema from '@/database'
import { DB_TAG } from '@/database/config'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env.local' }),
    DrizzlePGModule.registerAsync({
      tag: DB_TAG,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => ({
        pg: {
          connection: 'client',
          config: {
            host: 'localhost',
            port: 5432,
            database: 'umbridge',
            user: 'postgres',
            password: 'postgres',
          },
        },
        config: { schema: { ...schema } },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly config: ConfigService) {}

  private readonly logger = new Logger(AppModule.name)

  onApplicationBootstrap() {
    const PORT = this.config.getOrThrow<number>('PORT')

    this.logger.log(`Server will start at http://localhost:${PORT}`)
  }
}
