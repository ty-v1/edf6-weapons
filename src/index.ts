import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { loadPlugin } from './loadPlugin';

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  loadPlugin(app, false);

  return app.init();
};

export default createNestServer;
