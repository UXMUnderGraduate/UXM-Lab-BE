import { ResponsePreviousWorkDto } from './dto/response-previousWork.dto';
import { CreatePreviousWorkDto } from './dto/create-previousWork';
import { PreviousWork } from 'src/previousWorks/entities/previousWork.entity';
import { Injectable, NotFoundException, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GalleryImage } from 'src/gallery/entities/gallery-image.entity';

@Injectable()
export class PreviousWorkService {
  constructor(
    @InjectRepository(PreviousWork)
    private readonly previousWorkRepostory: Repository<PreviousWork>,
    @InjectRepository(GalleryImage)
    private readonly galleryImgRepository: Repository<GalleryImage>,
  ) {}

  async create(createPreviousWorkDto: CreatePreviousWorkDto): Promise<number> {
    const imgUrls = new Array<GalleryImage>(
      createPreviousWorkDto.imgUrls.length,
    );

    for (const imgUrl of createPreviousWorkDto.imgUrls) {
      const newImage = GalleryImage.from(imgUrl);
      const saveImage = await this.galleryImgRepository.save(newImage);
      imgUrls.push(saveImage);
    }

    const previousWork = PreviousWork.of(
      createPreviousWorkDto.title,
      createPreviousWorkDto.contents,
      createPreviousWorkDto.videoUrl,
      imgUrls,
    );

    const savedPreviousWork = await this.previousWorkRepostory.save(
      previousWork,
    );
    return savedPreviousWork.id;
  }
  async findAll(): Promise<ResponsePreviousWorkDto[]> {
    const publications: PreviousWork[] = await this.previousWorkRepostory.find({
      relations: {
        images: true,
      },
    });

    return publications.map(ResponsePreviousWorkDto.from);
  }
  async findOneById(id: number): Promise<ResponsePreviousWorkDto> {
    const publication: PreviousWork = await this.existById(id);

    return ResponsePreviousWorkDto.from(publication);
  }

  async remove(id: number): Promise<void> {
    await this.previousWorkRepostory.delete(id);
  }

  private async existById(id: number): Promise<PreviousWork> {
    const previousWork: PreviousWork = await this.previousWorkRepostory.findOne(
      {
        where: { id },
        relations: {
          images: true,
        },
      },
    );

    if (previousWork === null) {
      throw new NotFoundException();
    }

    return previousWork;
  }
}
