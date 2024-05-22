import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import databaseConfig from './config/database.config';
import appConfig from './config/app.config';
import authConfig from './config/auth.config';
import { APP_GUARD } from '@nestjs/core';
import { JWTAuthGuard } from './auth/guards/jwt.guard';

@Module({
  imports: [
    // 1- configuration
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
      load: [databaseConfig, appConfig, authConfig],
    }),
    // 2- Database
    DatabaseModule,
    AuthModule,
    PostsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JWTAuthGuard,
    },
  ],
})
export class AppModule {}
