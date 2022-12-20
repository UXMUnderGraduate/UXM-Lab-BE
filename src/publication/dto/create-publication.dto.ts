import { Publication } from '../entities/publication.entity';

export class CreatePublicationDto {
  title: string;

  author: string;

  publisher: string;

  publishedDate: Date;

  static toEntity(createPulicationDto: CreatePublicationDto): Publication {
    return Publication.of(
      createPulicationDto.title,
      createPulicationDto.author,
      createPulicationDto.publisher,
      createPulicationDto.publishedDate,
    );
  }
}
