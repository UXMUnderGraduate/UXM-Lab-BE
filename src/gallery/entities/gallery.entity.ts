import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';
import { GalleryImage } from './gallery-image.entity';

@Entity()
export class Gallery extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  contents: string;

  @OneToMany(() => GalleryImage, (GalleryImage) => GalleryImage.gallery)
  images: GalleryImage[];

  static of(title: string, contents: string, images: GalleryImage[]): Gallery {
    const gallery: Gallery = new Gallery();
    gallery.title = title;
    gallery.contents = contents;
    gallery.images = images;

    return gallery;
  }
}
