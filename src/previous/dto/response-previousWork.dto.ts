import { PreviousWork } from '../entities/previousWork.entity';

export class ResponsePreviousWorkDto {
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

  static from(previousWork: PreviousWork): ResponsePreviousWorkDto {
    const imgUrls =
      previousWork.images != null
        ? previousWork.images.map((previousWork) => previousWork.imgUrl)
        : [];

    return new ResponsePreviousWorkDto(
      previousWork.id,
      previousWork.title,
      previousWork.contents,
      previousWork.videoUrl,
      imgUrls,
      previousWork.createdAt,
      previousWork.updatedAt,
    );
  }
}
