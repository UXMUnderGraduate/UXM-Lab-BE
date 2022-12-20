import { Module } from '@nestjs/common';
import { ImageController } from './controller/image.controller';
import { MulterModule } from '@nestjs/platform-express';
import { multerOptions } from './config/multer.option';

@Module({
  imports: [MulterModule.register(multerOptions)],
  controllers: [ImageController],
})
export class ImageModule {}
