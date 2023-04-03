import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}
  @UseGuards(AuthGuard())
  @Post()
  async create(@Body() createMemberDto: CreateMemberDto): Promise<number> {
    return await this.memberService.create(createMemberDto);
  }

  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne(+id);
  }
  @UseGuards(AuthGuard())
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberService.remove(+id);
  }
}
