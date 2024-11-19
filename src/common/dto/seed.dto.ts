import { IsNumber, IsPositive } from 'class-validator';

export class SeedDto {
  @IsNumber()
  @IsPositive()
  currentMinutes: number;
}
