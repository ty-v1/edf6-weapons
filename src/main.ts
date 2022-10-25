import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

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

  await app.listen(3000);
}

bootstrap();
