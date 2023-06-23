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

  @Column()
  videoUrl: string;

  @OneToMany(() => GalleryImage, (GalleryImage) => GalleryImage.gallery, {
    cascade: true,
  })
  images: GalleryImage[];

  static of(
    title: string,
    contents: string,
    videoUrl: string,
    images: GalleryImage[],
  ): Gallery {
    const gallery: Gallery = new Gallery();
    gallery.title = title;
    gallery.contents = contents;
    gallery.videoUrl = videoUrl;
    gallery.images = images;

    return gallery;
  }
}
