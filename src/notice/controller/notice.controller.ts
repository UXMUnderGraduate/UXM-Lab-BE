import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoticeDto } from '../dto/create-notice.dto';
import { UpdateNoticeDto } from '../dto/update-notice.dto';
import { ResponseNoticeDto } from '../dto/reponse-notice.dto';
import { NoticeService } from '../service/notice.service';

@Controller('notices')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

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

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNoticeDto: UpdateNoticeDto,
  ) {
    return await this.noticeService.update(+id, updateNoticeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.noticeService.remove(+id);
  }
}
