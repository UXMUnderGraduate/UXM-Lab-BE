import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';

@Entity()
export class Publication extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: string; //연산을 위한 값이 아닌, 노출을 위한 값이니 문자열로 설정함.

  @Column()
  contents: string;

  @Column()
  author: string;

  @Column()
  publicationField: string;

  @Column()
  publishedDate: Date;

  editYear(year: string): void {
    this.year = year;
  }

  editContents(contents: string): void {
    this.contents = contents;
  }

  static of(
    year: string,
    contents: string,
    author: string,
    publicationField: string,
    publishedDate: Date,
  ): Publication {
    const publication: Publication = new Publication();
    publication.year = year;
    publication.contents = contents;
    publication.author = author;
    publication.publicationField = publicationField;
    publication.publishedDate = publishedDate;

    return publication;
  }
}
