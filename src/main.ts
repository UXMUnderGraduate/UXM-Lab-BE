import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function run() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port: number = Number.parseInt(process.env.PORT) || 8887;

  app.setGlobalPrefix('api');

  await app.listen(port);
}

run();
