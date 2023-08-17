import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

async function run() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const configService = app.get(ConfigService);
  const port: number = configService.get<number>('PORT');

  app.use(cookieParser());
  app.use(helmet());
  app.setGlobalPrefix('server');

  await app.listen(port);
  console.log(port);
}

run();
