import { Auth } from '../entities/auth.entity';

export class CreateAuthDto {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  static toEntity(dto: CreateAuthDto): Auth {
    return Auth.of(dto.email, dto.password);
  }
}
