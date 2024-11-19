import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  const { user } = ctx.switchToHttp().getRequest();

  if (!user) {
    throw new InternalServerErrorException('User not found');
  }

  if (!data) return user;

  return user[data];
});
