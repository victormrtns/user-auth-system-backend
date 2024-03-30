import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'user_backend_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  })
],
  controllers: [AppController,UserController],
  providers: [AppService],
})
export class AppModule {}
