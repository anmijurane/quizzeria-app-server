import { BadRequestException } from '@nestjs/common';

export const saftySeedExecute = (key: number) => {
  const currentMinutes = new Date().getMinutes();
  if (currentMinutes !== key) {
    throw new BadRequestException(
      'This action recreates the database. For your security, enter the current minute to execute this action.',
    );
  }
  return true;
};
