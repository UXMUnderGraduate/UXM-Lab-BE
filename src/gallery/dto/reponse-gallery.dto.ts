import { Gallery } from '../entities/gallery.entity';

export class ResponseGalleryDto {
  private readonly id: number;

  private readonly title: string;

  private readonly contents: string;

  private readonly videoUrl: string;

  private readonly imgUrls: string[];

  private readonly createdAt: Date;

  private readonly updatedAt: Date;

  constructor(
    id: number,
    title: string,
    contents: string,
    videoUrl: string,
    imgUrls: string[],
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.videoUrl = videoUrl;
    this.imgUrls = imgUrls;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from(gallery: Gallery): ResponseGalleryDto {
    const imgUrls =
      gallery.images != null
        ? gallery.images.map((galley) => galley.imgUrl)
        : [];

    return new ResponseGalleryDto(
      gallery.id,
      gallery.title,
      gallery.contents,
      gallery.videoUrl,
      imgUrls,
      gallery.createdAt,
      gallery.updatedAt,
    );
  }
}
