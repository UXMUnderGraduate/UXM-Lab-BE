import { Publication } from '../entities/publication.entity';

export class ResponsePublicationDto {
  private readonly id: number;

  private readonly year: string;

  private readonly contents: string;

  private readonly author: string;

  private readonly publicationField: string;

  private readonly publishedDate: Date;

  private readonly createdAt: Date;

  private readonly updatedAt: Date;

  constructor(
    id: number,
    year: string,
    contents: string,
    author: string,
    publicationField: string,
    publishedDate: Date,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.year = year;
    this.contents = contents;
    this.author = author;
    this.publicationField = publicationField;
    this.publishedDate = publishedDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from(publication: Publication): ResponsePublicationDto {
    return new ResponsePublicationDto(
      publication.id,
      publication.year,
      publication.contents,
      publication.author,
      publication.publicationField,
      publication.publishedDate,
      publication.createdAt,
      publication.updatedAt,
    );
  }
}
