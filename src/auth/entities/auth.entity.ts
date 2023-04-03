import { BaseTimeEntity } from '../../common/entities/BaseTimeEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  static of(email: string, password: string): Auth {
    const auth: Auth = new Auth();

    auth.email = email;
    auth.password = password;

    return auth;
  }
}
