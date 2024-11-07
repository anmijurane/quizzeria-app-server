import {
  IsArray,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { AnswerDto } from './create-answere.dto';
import { Type } from 'class-transformer';

export class CreateQuestionDto {
  @IsString()
  @MinLength(2)
  text: string;

  @IsString()
  @MinLength(2)
  subjectId: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AnswerDto)
  answers: AnswerDto[];
}
