import { BaseTimeEntity } from 'src/common/entities/BaseTimeEntity';
import { GalleryImage } from 'src/gallery/entities/gallery-image.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PreviousWork extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  contents: string;

  @Column()
  videoUrl: string;

  @OneToMany(() => GalleryImage, (GalleryImage) => GalleryImage.previousWork, {
    cascade: true,
  })
  images: GalleryImage[];

  static of(
    title: string,
    contents: string,
    videoUrl: string,
    images: GalleryImage[],
  ): PreviousWork {
    const previousWork: PreviousWork = new PreviousWork();

    previousWork.title = title;
    previousWork.contents = contents;
    previousWork.videoUrl = videoUrl;
    previousWork.images = images;

    return previousWork;
  }
}
