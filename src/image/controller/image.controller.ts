import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { readFileSync } from 'fs';

@Controller('images')
export class ImageController {
  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 5 }]))
  upload(@UploadedFiles() images: Array<Express.Multer.File>) {
    return images['images'].map((file) => {
      return file.filename;
    });
  }

  @Get('/:filename')
  async download(@Res() res: Response, @Param('filename') fileName: string) {
    const path = `uploads/${fileName}`;
    const image = readFileSync(path);

    res.setHeader('Content-Type', 'image/jpeg');
    res.send(image);
  }
}
