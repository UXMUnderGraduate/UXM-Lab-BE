import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publication } from '../entities/publication.entity';
import { ResponsePublicationDto } from '../dto/reponse-publication.dto';
import { UpdatePublicationDto } from '../dto/update-publication.dto';

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

  async update(
    id: number,
    updatePublicationDto: UpdatePublicationDto,
  ): Promise<void> {
    const publication: Publication = await this.existById(id);

    if (updatePublicationDto.year != null) {
      publication.editYear(updatePublicationDto.year);
    }

    if (updatePublicationDto.contents != null) {
      publication.editContents(updatePublicationDto.contents);
    }

    await this.publicationRepository.save<Publication>(publication);
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
