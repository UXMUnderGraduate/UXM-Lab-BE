import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';
import { Affiliation } from './affiliation.enum';

@Entity()
export class Member extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameKr: string;

  @Column()
  nameEn: string;

  @Column()
  affiliation: string;

  @Column()
  isAlumni: boolean;

  @Column()
  researchField: string;

  @Column()
  email: string;

  @Column()
  img: string;

  @Column()
  company: string;

  static of(
    nameKr: string,
    nameEn: string,
    affiliation: Affiliation,
    researchField: string,
    email: string,
    img: string,
    company: string,
  ): Member {
    const member: Member = new Member();

    member.nameKr = nameKr;
    member.nameEn = nameEn;
    member.affiliation = affiliation.toString();
    member.researchField = researchField;
    member.email = email;
    member.img = img;
    member.company = company;

    member.isAlumni = false;

    return member;
  }

  public alumni(): void {
    this.isAlumni = true;
  }
}
