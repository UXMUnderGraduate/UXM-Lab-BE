import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';

@Entity()
export class Publication extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  publisher: string;

  @Column()
  publishedDate: Date;

  static of(
    title: string,
    author: string,
    publisher: string,
    publishedDate: Date,
  ): Publication {
    const publication: Publication = new Publication();
    publication.title = title;
    publication.author = author;
    publication.publisher = publisher;
    publication.publishedDate = publishedDate;

    return publication;
  }
}
