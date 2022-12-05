import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoticeDto } from '../dto/create-notice.dto';
import { UpdateNoticeDto } from '../dto/update-notice.dto';
import { ResponseNoticeDto } from '../dto/reponse-notice.dto';
import { Notice } from '../entities/notice.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepository: Repository<Notice>,
  ) {}

  async create(createNoticeDto: CreateNoticeDto): Promise<number> {
    const newNotice: Notice = CreateNoticeDto.toEntity(createNoticeDto);
    console.log(newNotice);
    const savedNotice = await this.noticeRepository.save<Notice>(newNotice);
    console.log(savedNotice);
    return savedNotice.id;
  }

  async findAll(): Promise<ResponseNoticeDto[]> {
    const notices: Notice[] = await this.noticeRepository.find();
    return notices.map(ResponseNoticeDto.from);
  }

  async findOneBy(id: number): Promise<ResponseNoticeDto> {
    const notice: Notice = await this.existById(id);

    return ResponseNoticeDto.from(notice);
  }

  async remove(id: number): Promise<void> {
    const notice: Notice = await this.existById(id);
    await this.noticeRepository.remove(notice);
  }

  async update(id: number, updateNoticeDto: UpdateNoticeDto): Promise<void> {
    const notice: Notice = await this.existById(id);

    // console.log(notice);

    if (updateNoticeDto.title != null) {
      notice.editTitle(updateNoticeDto.title);
    }

    if (updateNoticeDto.contents != null) {
      notice.editContents(updateNoticeDto.contents);
    }

    // console.log(notice);

    await this.noticeRepository.save<Notice>(notice);
  }

  async existById(id: number): Promise<Notice> {
    const notice: Notice = await this.noticeRepository.findOneBy({ id });
    console.log(notice);
    if (notice == null) {
      throw new NotFoundException();
    }

    return notice;
  }
}
