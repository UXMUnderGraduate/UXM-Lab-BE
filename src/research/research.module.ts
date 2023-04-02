import { TypeOrmModule } from '@nestjs/typeorm';
import { Research } from './entities/research.entity';
import { ResearchController } from './controller/research.controller';
import { ResearchService } from './service/research.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Research])],
  controllers: [ResearchController],
  providers: [ResearchService],
})
export class ResearchModule {}
