import { IsBoolean, IsString } from 'class-validator';

export class AnswerDto {
  @IsString()
  text: string;

  @IsBoolean()
  isCorrect: boolean;
}
