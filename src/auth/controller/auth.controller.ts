import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { ResponseAuthDto } from '../dto/response-auth.dto';
import { CreateAuthDto } from '../dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signUp(createAuthDto);
  }

  @Post('/signIn')
  signIn(@Body() responseAuthDto: ResponseAuthDto): Promise<{
    accessToken: string;
  }> {
    return this.authService.signIn(responseAuthDto);
  }
}
