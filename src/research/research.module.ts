import { TypeOrmModule } from '@nestjs/typeorm';
import { Research } from './entities/research.entity';
import { ResearchController } from './controller/research.controller';
import { ResearchService } from './service/research.service';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Research]), AuthModule],
  controllers: [ResearchController],
  providers: [ResearchService],
})
export class ResearchModule {}
