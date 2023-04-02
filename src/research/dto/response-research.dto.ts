import { Research } from '../entities/research.entity';

export class ResponseResearchDto {
  private readonly id: number;
  private readonly title: string;
  private readonly contents: string;
  private readonly extraAddress: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  constructor(
    id: number,
    title: string,
    contents: string,
    extraAddress: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.extraAddress = extraAddress;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from(research: Research): ResponseResearchDto {
    return new ResponseResearchDto(
      research.id,
      research.title,
      research.contents,
      research.extraAddress,
      research.createdAt,
      research.updatedAt,
    );
  }
}
