import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PublicationService } from '../service/publication.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { ResponsePublicationDto } from '../dto/reponse-publication.dto';
import { UpdatePublicationDto } from '../dto/update-publication.dto';

@Controller('publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  async create(
    @Body() createPublicationDto: CreatePublicationDto,
  ): Promise<number> {
    return await this.publicationService.create(createPublicationDto);
  }

  @Get()
  async findAll(): Promise<ResponsePublicationDto[]> {
    return await this.publicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicationService.findOneById(+id);
  }

  @Patch(':id')
  async update(
    @Param(':id') id: string,
    @Body() updatePublicationDto: UpdatePublicationDto,
  ) {
    return await this.publicationService.update(+id, updatePublicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicationService.remove(+id);
  }
}
