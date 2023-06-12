import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

async function run() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port: number = Number.parseInt(process.env.PORT) || 8887;

  app.use(cookieParser());
  app.use(helmet());
  app.setGlobalPrefix('server');

  await app.listen(port);
  console.log(port);
}

run();
