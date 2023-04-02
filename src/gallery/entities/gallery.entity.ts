import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';
import { GalleyImage } from './gallery-image.entity';

@Entity()
export class Galley extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  contents: string;

  @OneToMany(() => GalleyImage, (GalleyImage) => GalleyImage.galley)
  images: GalleyImage[];

  static of(title: string, contents: string, images: GalleyImage[]): Galley {
    const galley: Galley = new Galley();
    galley.title = title;
    galley.contents = contents;
    galley.images = images;

    return galley;
  }
}
