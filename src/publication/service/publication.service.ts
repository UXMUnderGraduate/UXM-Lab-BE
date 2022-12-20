import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publication } from '../entities/publication.entity';
import { ResponsePublicationDto } from '../dto/reponse-publication.dto';

@Injectable()
export class PublicationService {
  constructor(
    @InjectRepository(Publication)
    private readonly publicationRepository: Repository<Publication>,
  ) {}

  async create(createPublicationDto: CreatePublicationDto): Promise<number> {
    const newPublication: Publication =
      CreatePublicationDto.toEntity(createPublicationDto);

    const savedPublication = await this.publicationRepository.save(
      newPublication,
    );
    return savedPublication.id;
  }

  async findAll(): Promise<ResponsePublicationDto[]> {
    const publications: Publication[] = await this.publicationRepository.find();

    return publications.map(ResponsePublicationDto.from);
  }

  async findOneById(id: number): Promise<ResponsePublicationDto> {
    const publication: Publication = await this.existById(id);

    return ResponsePublicationDto.from(publication);
  }

  async remove(id: number): Promise<void> {
    const publication: Publication = await this.existById(id);
    await this.publicationRepository.remove(publication);
  }

  private async existById(id: number): Promise<Publication> {
    const publication: Publication = await this.publicationRepository.findOneBy(
      { id },
    );

    if (publication == null) {
      throw new NotFoundException();
    }

    return publication;
  }
}
