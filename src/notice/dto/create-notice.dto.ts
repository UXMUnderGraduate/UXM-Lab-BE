import { Notice } from '../entities/notice.entity';

export class CreateNoticeDto {
  title: string;

  contents: string;

  static toEntity(createNoticeDto: CreateNoticeDto): Notice {
    return Notice.of(createNoticeDto.title, createNoticeDto.contents);
  }
}
