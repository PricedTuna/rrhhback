import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/LogInDto';
import { SignUpUserDto } from './dto/sign-up-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  login(@Body() logInDto :LogInDto) {
    return this.authService.logIn(logInDto);
  }

  @Post("signup")
  signUp(@Body() signUpUserDto :SignUpUserDto) {
    return this.authService.signUp(signUpUserDto);
  }

}
