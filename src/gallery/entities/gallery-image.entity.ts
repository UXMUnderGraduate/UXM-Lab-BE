import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';
import { Gallery } from './gallery.entity';

@Entity()
export class GalleryImage extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imgUrl: string;

  @ManyToOne(() => Gallery, (Gallery) => Gallery.images)
  gallery: Gallery;

  static from(url: string): GalleryImage {
    const image = new GalleryImage();
    image.imgUrl = url;

    return image;
  }
}
