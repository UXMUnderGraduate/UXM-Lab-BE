import { Galley } from '../entities/galley.entity';

export class ResponseGalleyDto {
  private readonly id: number;

  private readonly title: string;

  private readonly contents: string;

  private readonly imgUrls: string[];

  private readonly createdAt: Date;

  private readonly updatedAt: Date;

  constructor(
    id: number,
    title: string,
    contents: string,
    imgUrls: string[],
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.imgUrls = imgUrls;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from(galley: Galley): ResponseGalleyDto {
    const imgUrls =
      galley.images != null ? galley.images.map((galley) => galley.imgUrl) : [];

    return new ResponseGalleyDto(
      galley.id,
      galley.title,
      galley.contents,
      imgUrls,
      galley.createdAt,
      galley.updatedAt,
    );
  }
}
