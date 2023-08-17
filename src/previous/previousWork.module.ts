import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreviousWork } from './entities/previousWork.entity';
import { GalleryImage } from 'src/gallery/entities/gallery-image.entity';
import { AuthModule } from 'src/auth/auth.module';
import { PreviousWorkController } from './previousWork.controller';
import { PreviousWorkService } from './previousWork.service';

@Module({
  imports: [TypeOrmModule.forFeature([PreviousWork, GalleryImage]), AuthModule],
  controllers: [PreviousWorkController],
  providers: [PreviousWorkService],
})
export class PreviousWorkModule {}
