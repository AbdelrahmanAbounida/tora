import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false, // if true this means that any extra propery will be removed automatically and got neglected
    }),
  );
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(configService.getOrThrow('app.port'));
}
bootstrap();
