import { Publication } from '../entities/publication.entity';

export class CreatePublicationDto {
  year: string;

  contents: string;

  author: string;

  publisher: string;

  publishedDate: Date;

  static toEntity(createPulicationDto: CreatePublicationDto): Publication {
    return Publication.of(
      createPulicationDto.year,
      createPulicationDto.contents,
      createPulicationDto.author,
      createPulicationDto.publisher,
      createPulicationDto.publishedDate,
    );
  }
}
