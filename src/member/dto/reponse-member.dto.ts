import { Member } from '../entities/member.entity';

export class ResponseMemberDto {
  readonly id: number;
  readonly nameKr: string;
  readonly nameEn: string;
  readonly affiliation: string;
  readonly degree: string;
  readonly isAlumni: boolean;
  readonly researchField: string;
  readonly email: string;
  readonly img: string;
  readonly company: string;

  constructor(
    id: number,
    nameKr: string,
    nameEn: string,
    affiliation: string,
    degree: string,
    isAlumni: boolean,
    researchField: string,
    email: string,
    img: string,
    company: string,
  ) {
    this.id = id;
    this.nameKr = nameKr;
    this.nameEn = nameEn;
    this.affiliation = affiliation;
    this.isAlumni = isAlumni;
    this.degree = degree;
    this.researchField = researchField;
    this.email = email;
    this.img = img;
    this.company = company;
  }

  static from(entity: Member): ResponseMemberDto {
    return new ResponseMemberDto(
      entity.id,
      entity.nameKr,
      entity.nameEn,
      entity.affiliation,
      entity.degree,
      entity.isAlumni,
      entity.researchField,
      entity.email,
      entity.img,
      entity.company,
    );
  }
}
