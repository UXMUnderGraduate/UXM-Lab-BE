import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GalleyService } from '../service/galley.service';
import { CreateGalleyDto } from '../dto/create-galley.dto';
import { ResponseGalleyDto } from '../dto/reponse-galley.dto';

@Controller('galley')
export class GalleyController {
  constructor(private readonly galleyService: GalleyService) {}

  @Post()
  async create(@Body() createPublicationDto: CreateGalleyDto): Promise<number> {
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
