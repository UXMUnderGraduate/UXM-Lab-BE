import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GalleryService } from '../service/gallery.service';
import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { ResponseGalleryDto } from '../dto/reponse-gallery.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  async create(
    @Body() createPublicationDto: CreateGalleryDto,
  ): Promise<number> {
    return await this.galleryService.create(createPublicationDto);
  }

  @Get()
  async findAll(): Promise<ResponseGalleryDto[]> {
    return await this.galleryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galleryService.findOneById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galleryService.remove(+id);
  }
}
