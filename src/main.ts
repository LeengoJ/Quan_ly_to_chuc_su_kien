import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtGuard } from './common/guards/jwt.guard'
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  //const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //   const configService = app.get(ConfigService);

  //   const reflector = app.get(Reflector);
  //   app.useGlobalGuards(new JwtGuard(reflector));
  //   //app.useGlobalInterceptors(new TransformInterceptor(reflector));

  //   app.useStaticAssets(join(__dirname, '..', 'public')); //js, css, images
  //   app.setBaseViewsDir(join(__dirname, '..', 'views')); //view 
  //   app.setViewEngine('ejs');

  //   app.setGlobalPrefix('api');
  //   app.enableVersioning({
  //     type: VersioningType.URI,
  //     defaultVersion: ['1'],
  //     //Optional defaultVersion: ['1', '2'],
  //   });
  //   app.useGlobalPipes(new ValidationPipe());
  //   //config Cors
  //   app.enableCors({
  //     "origin": true,
  //     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  //     "preflightContinue": false,
  //     credentials: true
  //   });
  //   //config cookies
  //   app.use(cookieParser());
  //   await app.listen(3001); 
}
bootstrap();
// function cookieParser(): any {
//   throw new Error('Function not implemented.');


