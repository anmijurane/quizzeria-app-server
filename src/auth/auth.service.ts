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

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
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
      return userCreated;
    } catch (error) {
      // TODO: implements control error
      throw new InternalServerErrorException(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const user = await this.userRepo.findOne({
        where: { email: loginUserDto.email },
        select: { email: true, password: true },
      });
      if (!user) {
        throw new UnauthorizedException();
      }

      if (!compareSync(loginUserDto.password, user.password)) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (error) {
      // TODO: implements control error
      throw new InternalServerErrorException(error);
    }
  }
}
