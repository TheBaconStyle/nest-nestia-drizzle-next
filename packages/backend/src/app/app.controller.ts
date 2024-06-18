import { TypedRoute } from '@nestia/core'
import { Controller } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get()
  async getHello() {
    return await this.appService.getHello()
  }
}
