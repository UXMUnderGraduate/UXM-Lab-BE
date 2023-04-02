import { Module } from '@nestjs/common';
import { GalleryService } from './service/gallery.service';
import { GalleryController } from './controller/gallery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Galley } from './entities/gallery.entity';
import { GalleyImage } from './entities/gallery-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Galley, GalleyImage])],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
