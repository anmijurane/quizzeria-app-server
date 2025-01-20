import {
  Controller,
  Post,
  Body,
  Get,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto';
import { RawHeaders } from 'src/common/decorators/raw-headers.decorator';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }

  @Get('verify-session')
  verifySession(@RawHeaders() rawHeaders: string[]) {
    const authorization = rawHeaders.find((header) =>
      header.includes('Bearer'),
    );
    if (authorization) {
      const token = authorization.split(' ')[1];
      return this.usersService.checkSession(token);
    }
    throw new UnauthorizedException('No token includes');
  }
}
