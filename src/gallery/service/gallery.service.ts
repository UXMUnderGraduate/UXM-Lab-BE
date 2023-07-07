import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gallery } from '../entities/gallery.entity';
import { ResponseGalleryDto } from '../dto/reponse-gallery.dto';
import { GalleryImage } from '../entities/gallery-image.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleyRepository: Repository<Gallery>,
    @InjectRepository(GalleryImage)
    private readonly galleyImgRepository: Repository<GalleryImage>,
  ) {}

  async create(createGalleyDto: CreateGalleryDto): Promise<number> {
    const imgUrls = new Array<GalleryImage>(createGalleyDto.imgUrls.length);

    for (const imgUrl of createGalleyDto.imgUrls) {
      const newImage = GalleryImage.from(imgUrl);
      const saveImage = await this.galleyImgRepository.save(newImage);
      imgUrls.push(saveImage);
    }

    const galley = Gallery.of(
      createGalleyDto.title,
      createGalleyDto.contents,
      createGalleyDto.videoUrl,
      imgUrls,
    );

    const savedGalley = await this.galleyRepository.save(galley);
    return savedGalley.id;
  }

  async findAll(): Promise<ResponseGalleryDto[]> {
    const publications: Gallery[] = await this.galleyRepository.find({
      relations: {
        images: true,
      },
    });

    return publications.map(ResponseGalleryDto.from);
  }

  async findOneById(id: number): Promise<ResponseGalleryDto> {
    const publication: Gallery = await this.existById(id);

    return ResponseGalleryDto.from(publication);
  }

  async remove(id: number): Promise<void> {
    await this.galleyRepository.delete(id);
  }

  private async existById(id: number): Promise<Gallery> {
    const gallery: Gallery = await this.galleyRepository.findOne({
      where: { id },
      relations: {
        images: true,
      },
    });

    if (gallery === null) {
      throw new NotFoundException();
    }

    return gallery;
  }
}
