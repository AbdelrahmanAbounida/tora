import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CustomLogger } from 'src/common/logging/app-logger';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // ::TODO:: add auth module to use its service
  ],
  controllers: [UsersController],
  providers: [UsersService, CustomLogger],
  exports: [UsersService],
})
export class UsersModule {}
