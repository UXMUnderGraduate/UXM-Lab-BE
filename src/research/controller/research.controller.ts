import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ResearchService } from '../service/research.service';
import { CreateResearchDto } from '../dto/create-admin.dto';
import { ResponseResearchDto } from '../dto/response-research.dto';
import { UpdateResearchDto } from '../dto/update-research.dto';

@Controller('research')
export class ResearchController {
  constructor(private readonly researchService: ResearchService) {}

  @Post()
  async create(@Body() createResearchDto: CreateResearchDto): Promise<number> {
    return await this.researchService.create(createResearchDto);
  }

  @Get()
  async findAll(): Promise<ResponseResearchDto[]> {
    return await this.researchService.findAll();
  }

  @Get(':id')
  findOne(@Param(':id') id: string) {
    return this.researchService.findOneById(+id);
  }

  @Patch(':id')
  async update(
    @Param(':id') id: string,
    @Body() updateResearchDto: UpdateResearchDto,
  ) {
    return await this.researchService.update(+id, updateResearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.researchService.remove(+id);
  }
}
