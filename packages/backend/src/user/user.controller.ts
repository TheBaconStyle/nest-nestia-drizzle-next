import { Controller } from '@nestjs/common'
import { UserService } from './user.service'
import { TypedBody, TypedRoute } from '@nestia/core'
import { TInsertUser } from '@/schema'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @TypedRoute.Post()
  // findByCredentials() {}

  @TypedRoute.Post()
  create(@TypedBody() data: TInsertUser) {
    // return this.userService.create(data)
    return `Hello ${JSON.stringify(data)}`
  }
}
