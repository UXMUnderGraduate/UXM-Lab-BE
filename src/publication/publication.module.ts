import { Module } from '@nestjs/common';
import { PublicationService } from './service/publication.service';
import { PublicationController } from './controller/publication.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from './entities/publication.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Publication]), AuthModule],
  controllers: [PublicationController],
  providers: [PublicationService],
})
export class PublicationModule {}
