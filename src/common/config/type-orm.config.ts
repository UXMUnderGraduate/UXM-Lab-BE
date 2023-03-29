import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number.parseInt(process.env.DB_PORT) || 33306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '12345678',
  database: process.env.DB_NAME || 'uxm',
  logging: true,
  autoLoadEntities: true,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
};

export default config;
