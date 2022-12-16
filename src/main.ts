import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { loadPlugin } from './loadPlugin';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  loadPlugin(app, true);
  await app.listen(3000);
}

bootstrap();
