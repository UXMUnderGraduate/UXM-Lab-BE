import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function run() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port: number = Number.parseInt(process.env.PORT) || 8887;

  app.use(cookieParser());
  app.setGlobalPrefix('api');

  await app.listen(port);
}

run();
