import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../entities/auth.entity';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {
    super({
      secretOrKey: process.env.JWTSECRETKEY || 'Secret1234',
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const [type, token] = request.headers.authorization?.split(' ') ?? [];
          return type === 'Bearer' ? token : undefined;
        },
      ]),
      ignoreExpiration: false,
    });
  }

  async validate(payload) {
    const { email } = payload;
    const user: Auth = await this.authRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('not user');
    }

    return user;
  }
}
