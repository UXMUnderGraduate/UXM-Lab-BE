import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GalleryService } from '../service/gallery.service';
import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { ResponseGalleyDto } from '../dto/reponse-gallery.dto';

@Controller('galley')
export class GalleryController {
  constructor(private readonly galleyService: GalleryService) {}

  @Post()
  async create(
    @Body() createPublicationDto: CreateGalleryDto,
  ): Promise<number> {
    return await this.galleyService.create(createPublicationDto);
  }

  @Get()
  async findAll(): Promise<ResponseGalleyDto[]> {
    return await this.galleyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galleyService.findOneById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galleyService.remove(+id);
  }
}
