import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'

import dotenv from 'dotenv'
dotenv.config()

const password = process.env.PASSWORD

@Module({
  imports: [MongooseModule.forRoot(password), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
