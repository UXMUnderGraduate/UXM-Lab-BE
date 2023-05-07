import { Publication } from '../entities/publication.entity';

export class CreatePublicationDto {
  year: string;

  contents: string;

  author: string;

  publicationField: string;

  publishedDate: Date;

  static toEntity(createPublicationDto: CreatePublicationDto): Publication {
    return Publication.of(
      createPublicationDto.year,
      createPublicationDto.contents,
      createPublicationDto.author,
      createPublicationDto.publicationField,
      createPublicationDto.publishedDate,
    );
  }
}
