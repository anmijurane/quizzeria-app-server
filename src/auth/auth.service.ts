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

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log('CREATE');
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
      // TODO: implements control error
      throw new InternalServerErrorException(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const user = await this.userRepo.findOne({
        where: { email: loginUserDto.email },
        select: { email: true, password: true, id: true },
      });
      if (!user) {
        throw new UnauthorizedException();
      }

      if (!compareSync(loginUserDto.password, user.password)) {
        throw new UnauthorizedException();
      }
      delete user.password;
      return {
        ...user,
        token: this.getJWT({ id: user.id }),
      };
    } catch (error) {
      // TODO: implements control error
      throw new InternalServerErrorException(error);
    }
  }

  private getJWT(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
