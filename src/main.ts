import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { JwtAuthGuard } from './common/guards/jwt.guard';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1'],
    //Optional defaultVersion: ['1', '2'],
  });
  app.useGlobalPipes(new ValidationPipe());
  //   //config Cors
  app.enableCors({
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    credentials: true
  });
  //   //config cookies
  app.use(cookieParser());
  app.use(helmet());

  await app.listen(3001);

}
bootstrap();


