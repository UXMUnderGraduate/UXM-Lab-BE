import { Publication } from '../entities/publication.entity';

export class ResponsePublicationDto {
  private readonly id: number;

  private readonly title: string;

  private readonly author: string;

  private readonly publisher: string;

  private readonly publishedDate: Date;

  private readonly createdAt: Date;

  private readonly updatedAt: Date;

  constructor(
    id: number,
    title: string,
    author: string,
    publisher: string,
    publishedDate: Date,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.publishedDate = publishedDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from(publication: Publication): ResponsePublicationDto {
    return new ResponsePublicationDto(
      publication.id,
      publication.title,
      publication.author,
      publication.publisher,
      publication.publishedDate,
      publication.createdAt,
      publication.updatedAt,
    );
  }
}
