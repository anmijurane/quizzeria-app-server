import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashSync, compareSync } from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/common/interfaces/jwt.interface';
import { TokenVerify } from './interfaces/jwt-type.interface';
import {
  ResourceUnauthorizedException,
  UnauthorizedExceptionByBadCredencials,
  UnauthorizedExceptionByUserNotFound,
} from 'src/common/handles/errors/http';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...user } = createUserDto;
      const userCreated = this.userRepo.create({
        ...user,
        password: hashSync(password, 15), // encrypt password
      });
      await this.userRepo.save(userCreated);
      delete userCreated.password;
      return {
        ...userCreated,
        token: this.getJWT({ id: userCreated.id }),
      };
    } catch (error) {
      throw ResourceUnauthorizedException(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const user = await this.userRepo.findOne({
        where: { email: loginUserDto.email },
      });
      if (!user) {
        throw UnauthorizedExceptionByUserNotFound();
      }

      if (!compareSync(loginUserDto.password, user.password)) {
        throw UnauthorizedExceptionByBadCredencials();
      }
      delete user.password;
      return {
        ...user,
        token: this.getJWT({ id: user.id }),
      };
    } catch (error) {
      // TODO: implements control error
      if (error.status === 401) {
        throw new UnauthorizedException(error);
      }
      throw new InternalServerErrorException(error);
    }
  }

  async checkSession(payload: string) {
    let resolve: TokenVerify;
    try {
      resolve = this.jwtService.verify(payload) as TokenVerify;
      const user = await this.userRepo.findOne({
        where: { id: resolve.id },
      });
      delete user.password;
      return {
        activeSession: true,
        user,
      };
    } catch (error) {
      return {
        sessionActive: false,
        user: null,
        ...error,
      };
    }
  }

  private getJWT(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
