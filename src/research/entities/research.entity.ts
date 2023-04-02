import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';

@Entity()
export class Research extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  contents: string;

  @Column()
  extraAddress: string;

  editTitle(title: string): void {
    this.title = title;
  }

  editContents(contents: string): void{
    this.contents = contents;
  }

  editExtraAddress(extraAddress: string): void {
    this.extraAddress = extraAddress;
  }

  static of(title: string, contents: string, extraAddress: string): Research {
    const research: Research = new Research();
    research.title = title;
    research.contents = contents;
    research.extraAddress = extraAddress;

    return research;
  }
}