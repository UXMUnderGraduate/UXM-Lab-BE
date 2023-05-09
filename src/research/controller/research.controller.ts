import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ResearchService } from '../service/research.service';
import { CreateResearchDto } from '../dto/create-research.dto';
import { ResponseResearchDto } from '../dto/response-research.dto';
import { UpdateResearchDto } from '../dto/update-research.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('research')
export class ResearchController {
  constructor(private readonly researchService: ResearchService) {}

  @UseGuards(AuthGuard())
  @Post()
  async create(@Body() createResearchDto: CreateResearchDto): Promise<number> {
    return await this.researchService.create(createResearchDto);
  }

  @Get()
  async findAll(): Promise<ResponseResearchDto[]> {
    return await this.researchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.researchService.findOneById(+id);
  }
  @UseGuards(AuthGuard())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateResearchDto: UpdateResearchDto,
  ) {
    return await this.researchService.update(+id, updateResearchDto);
  }
  @UseGuards(AuthGuard())
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.researchService.remove(+id);
  }
}
