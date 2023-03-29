import { Member } from '../entities/member.entity';
import { Affiliation } from '../entities/affiliation.enum';

export class CreateMemberDto {
  readonly nameKr: string;
  readonly nameEn: string;
  readonly affiliation: Affiliation;
  readonly researchField: string;
  readonly email: string;
  readonly img: string;
  readonly company: string;

  static toEntity(dto: CreateMemberDto): Member {
    return Member.of(
      dto.nameKr,
      dto.nameEn.toUpperCase(),
      dto.affiliation,
      dto.researchField,
      dto.email,
      dto.img,
      dto.company,
    );
  }
}
