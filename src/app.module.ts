import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'
import { urlMongo } from './env'

@Module({
  imports: [MongooseModule.forRoot(urlMongo), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
