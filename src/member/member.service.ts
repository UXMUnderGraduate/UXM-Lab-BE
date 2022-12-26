import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseMemberDto } from './dto/reponse-member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async create(createMemberDto: CreateMemberDto): Promise<number> {
    const createMember: Member = CreateMemberDto.toEntity(createMemberDto);
    const savedMember: Member = await this.memberRepository.save(createMember);

    return savedMember.id;
  }

  async findAll(): Promise<ResponseMemberDto[]> {
    const allMembers: Member[] = await this.memberRepository.find();
    console.log(allMembers);
    return allMembers.map(ResponseMemberDto.from);
  }

  async findOne(id: number): Promise<ResponseMemberDto> {
    const foundMember = await this.memberRepository.findOneBy({ id });
    if (foundMember == null) {
      throw new NotFoundException();
    }

    return ResponseMemberDto.from(foundMember);
  }

  async remove(id: number): Promise<void> {
    await this.memberRepository.delete(id);
  }
}
