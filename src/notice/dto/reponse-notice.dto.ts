import { Notice } from '../entities/notice.entity';

export class ResponseNoticeDto {
  private readonly id: number;

  private readonly title: string;

  private readonly contents: string;

  private readonly createdAt: Date;

  private readonly updatedAt: Date;

  constructor(
    id: number,
    title: string,
    contents: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from(notice: Notice): ResponseNoticeDto {
    return new ResponseNoticeDto(
      notice.id,
      notice.title,
      notice.contents,
      notice.createdAt,
      notice.updatedAt,
    );
  }
}
