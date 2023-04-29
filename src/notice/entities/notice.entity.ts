import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';
import { Auth } from '../../auth/entities/auth.entity';

@Entity()
export class Notice extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  contents: string;

  editTitle(title: string): void {
    this.title = title;
  }

  editContents(contents: string): void {
    this.contents = contents;
  }

  static of(title: string, contents: string): Notice {
    const notice: Notice = new Notice();
    notice.title = title;
    notice.contents = contents;

    return notice;
  }
}
