import { AuthGuard } from '@nestjs/passport';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreatePreviousWorkDto } from './dto/create-previousWork';
import { PreviousWorkService } from './previousWork.service';
import { ResponsePreviousWorkDto } from './dto/response-previousWork.dto';

@Controller('previousWork')
export class PreviousWorkController {
  constructor(private readonly previousWorkService: PreviousWorkService) {}

  @UseGuards(AuthGuard())
  @Post()
  async create(
    @Body() createPublicationDto: CreatePreviousWorkDto,
  ): Promise<number> {
    return await this.previousWorkService.create(createPublicationDto);
  }

  @Get()
  async findAll(): Promise<ResponsePreviousWorkDto[]> {
    return await this.previousWorkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.previousWorkService.findOneById(+id);
  }

  @UseGuards(AuthGuard())
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.previousWorkService.remove(+id);
  }
}
