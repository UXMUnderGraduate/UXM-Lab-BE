import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';
import { Galley } from './galley.entity';

@Entity()
export class GalleyImage extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imgUrl: string;

  @ManyToOne(() => Galley, (Galley) => Galley.images)
  galley: Galley;

  static from(url: string): GalleyImage {
    const image = new GalleyImage();
    image.imgUrl = url;

    return image;
  }
}
