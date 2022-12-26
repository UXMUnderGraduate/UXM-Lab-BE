import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGalleyDto } from '../dto/create-galley.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Galley } from '../entities/galley.entity';
import { ResponseGalleyDto } from '../dto/reponse-galley.dto';
import { GalleyImage } from '../entities/galley-image.entity';

@Injectable()
export class GalleyService {
  constructor(
    @InjectRepository(Galley)
    private readonly galleyRepository: Repository<Galley>,
    @InjectRepository(GalleyImage)
    private readonly galleyImgRepository: Repository<GalleyImage>,
  ) {}

  async create(createGalleyDto: CreateGalleyDto): Promise<number> {
    const imgUrls = new Array<GalleyImage>(createGalleyDto.imgUrls.length);

    for (const imgUrl of createGalleyDto.imgUrls) {
      const newImage = GalleyImage.from(imgUrl);
      const saveImage = await this.galleyImgRepository.save(newImage);
      imgUrls.push(saveImage);
    }

    const galley = Galley.of(
      createGalleyDto.title,
      createGalleyDto.contents,
      imgUrls,
    );

    const savedGalley = await this.galleyRepository.save(galley);
    return savedGalley.id;
  }

  async findAll(): Promise<ResponseGalleyDto[]> {
    const publications: Galley[] = await this.galleyRepository.find({
      relations: {
        images: true,
      },
    });

    return publications.map(ResponseGalleyDto.from);
  }

  async findOneById(id: number): Promise<ResponseGalleyDto> {
    const publication: Galley = await this.existById(id);

    return ResponseGalleyDto.from(publication);
  }

  async remove(id: number): Promise<void> {
    await this.galleyRepository.delete(id);
  }

  private async existById(id: number): Promise<Galley> {
    const galley: Galley = await this.galleyRepository.findOne({
      where: { id },
      relations: {
        images: true,
      },
    });

    if (galley == null) {
      throw new NotFoundException();
    }

    return galley;
  }
}
