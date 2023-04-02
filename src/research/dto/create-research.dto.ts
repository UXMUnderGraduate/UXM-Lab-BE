import { Research } from '../entities/research.entity';

export class CreateResearchDto {
  title: string;
  contents: string;
  extraAddress: string;

  static toEntity(createResearchDto: CreateResearchDto): Research {
    return Research.of(
      createResearchDto.title,
      createResearchDto.contents,
      createResearchDto.extraAddress,
    );
  }
}