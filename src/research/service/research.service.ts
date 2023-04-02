import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResearchDto } from '../dto/create-research.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Research } from '../entities/research.entity';
import { ResponseResearchDto } from '../dto/response-research.dto';
import { UpdateResearchDto } from '../dto/update-research.dto';

@Injectable()
export class ResearchService {
  constructor(
    @InjectRepository(Research)
    private readonly researchRepository: Repository<Research>,
  ) {}

  async create(createResearchDto: CreateResearchDto): Promise<number> {
    const newResearch: Research = CreateResearchDto.toEntity(createResearchDto);

    const savedResearch = await this.researchRepository.save(newResearch);

    return savedResearch.id;
  }

  async findAll(): Promise<ResponseResearchDto[]> {
    const researches: Research[] = await this.researchRepository.find();

    return researches.map(ResponseResearchDto.from);
  }
  async findOneById(id: number): Promise<ResponseResearchDto> {
    const research: Research = await this.existById(id);

    return ResponseResearchDto.from(research);
  }

  async remove(id: number): Promise<void> {
    const research: Research = await this.existById(id);
    await this.researchRepository.remove(research);
  }

  async update(
    id: number,
    updateResearchDto: UpdateResearchDto,
  ): Promise<void> {
    const research: Research = await this.existById(id);

    if (updateResearchDto.title != null) {
      research.editTitle(updateResearchDto.title);
    }
    if (updateResearchDto.contents != null) {
      research.editContents(updateResearchDto.contents);
    }
    if (updateResearchDto.extraAddress != null) {
      research.editExtraAddress(updateResearchDto.extraAddress);
    }

    console.log(research);

    await this.researchRepository.save<Research>(research);
  }
  private async existById(id: number): Promise<Research> {
    const research: Research = await this.researchRepository.findOneBy({ id });
    if (research == null) {
      throw new NotFoundException();
    }

    return research;
  }
}
