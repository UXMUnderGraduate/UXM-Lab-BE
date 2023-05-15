import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from '../entities/auth.entity';
import { Repository } from 'typeorm';
import { ResponseAuthDto } from '../dto/response-auth.dto';
import * as bcrypt from 'bcryptjs';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
    private jwtService: JwtService,
  ) {}
  async signUp(createAuthDto: CreateAuthDto): Promise<{ result: string }> {
    const { email, password } = createAuthDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      await this.authRepository.save({
        email,
        password: hashedPassword,
      });
      return { result: 'success' };
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('이미 존재하는 어드민입니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  async signIn(
    responseAuthDto: ResponseAuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ accessToken: string }> {
    const { email, password } = responseAuthDto;
    const user = await this.authRepository.findOneBy({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 ( Secret + Payload )
      const payload = { email };
      const accessToken = await this.jwtService.signAsync(payload);

      res.cookie('accessToken', accessToken, {
        domain: 'uxm.mju.ac.kr',
        path: '/',
        httpOnly: true,
        maxAge: 0.5 * 60 * 60 * 1000, //0.5 hour
      });

      return { accessToken };
    } else {
      throw new UnauthorizedException('Fail');
    }
  }
}
