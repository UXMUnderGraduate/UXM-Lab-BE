import { PreviousWork } from '../../previous/entities/previousWork.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';
import { Gallery } from './gallery.entity';
import { Auth } from '../../auth/entities/auth.entity';

@Entity()
export class GalleryImage extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imgUrl: string;

  @ManyToOne(() => Gallery, (Gallery) => Gallery.images, {
    onDelete: 'CASCADE',
  })
  gallery: Gallery;

  @ManyToOne(() => PreviousWork, (PreviousWork) => PreviousWork.images, {
    onDelete: 'CASCADE',
  })
  previousWork: PreviousWork;

  static from(url: string): GalleryImage {
    const image = new GalleryImage();
    image.imgUrl = url;

    return image;
  }
}
