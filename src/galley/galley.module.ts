import { Module } from '@nestjs/common';
import { GalleyService } from './service/galley.service';
import { GalleyController } from './controller/galley.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Galley } from './entities/galley.entity';
import { GalleyImage } from './entities/galley-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Galley, GalleyImage])],
  controllers: [GalleyController],
  providers: [GalleyService],
})
export class GalleyModule {}
