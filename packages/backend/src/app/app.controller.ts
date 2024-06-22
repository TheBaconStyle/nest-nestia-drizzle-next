import { TypedParam, TypedRoute } from '@nestia/core'
import { Controller } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get(':param')
  async getHello(@TypedParam('param') param: string) {
    console.log(param)
    return `Hello, ${param}`
  }
}
