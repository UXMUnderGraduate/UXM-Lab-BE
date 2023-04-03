import { Auth } from '../entities/auth.entity';

export class ResponseAuthDto {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  constructor(id: number, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  static from(entity: Auth): ResponseAuthDto {
    return new ResponseAuthDto(entity.id, entity.email, entity.password);
  }
}
