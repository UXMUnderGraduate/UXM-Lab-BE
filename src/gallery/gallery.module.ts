import { Module } from '@nestjs/common';
import { GalleryService } from './service/gallery.service';
import { GalleryController } from './controller/gallery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gallery } from './entities/gallery.entity';
import { GalleryImage } from './entities/gallery-image.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery, GalleryImage]), AuthModule],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
