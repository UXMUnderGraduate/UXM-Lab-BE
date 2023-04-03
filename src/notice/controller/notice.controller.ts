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
import { CreateNoticeDto } from '../dto/create-notice.dto';
import { UpdateNoticeDto } from '../dto/update-notice.dto';
import { ResponseNoticeDto } from '../dto/reponse-notice.dto';
import { NoticeService } from '../service/notice.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('notices')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}
  @UseGuards(AuthGuard())
  @Post()
  async create(@Body() createNoticeDto: CreateNoticeDto) {
    return { id: await this.noticeService.create(createNoticeDto) };
  }

  @Get()
  async findAll(): Promise<ResponseNoticeDto[]> {
    return await this.noticeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseNoticeDto> {
    return await this.noticeService.findOneById(+id);
  }
  @UseGuards(AuthGuard())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNoticeDto: UpdateNoticeDto,
  ) {
    return await this.noticeService.update(+id, updateNoticeDto);
  }
  @UseGuards(AuthGuard())
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.noticeService.remove(+id);
  }
}
