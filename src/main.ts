import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
// @ts-ignore
import * as flash from 'connect-flash';

const resolveStaticAssetsDir = (isDev: boolean) => {
  return isDev ? path.join(__dirname, '..', '..', 'public') : path.join(__dirname, '..', 'public');
};

const resolveBaseViewsDir = (isDev: boolean) => {
  return isDev ? path.join(__dirname, '..', '..', 'views') : path.join(__dirname, '..', 'views');
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const isDev = process.env.NODE_ENV != 'prd';
  app.useStaticAssets(resolveStaticAssetsDir(isDev));
  app.setBaseViewsDir(resolveBaseViewsDir(isDev));
  app.setViewEngine('ejs');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(cookieParser('s'));
  app.use(session({ cookie: { maxAge: 60000 } }));
  app.use(flash());

  await app.listen(3000);
}

bootstrap();
