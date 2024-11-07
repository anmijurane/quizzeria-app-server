import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { SeedDto } from 'src/common/dto/seed.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UUID } from 'crypto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  /**REQUIRE AUTH*/
  @Post('/create')
  create(@Body() body: CreateQuestionDto) {
    return this.questionsService.create(body);
  }

  @Get('/:idSubject')
  getByIdSubject(@Param('idSubject') idSubject: UUID) {
    return this.questionsService.getByIdSubject(idSubject);
  }

  @Get('/getAnswers/:idQuestion')
  getAnswersByIdQuestion(@Param('idQuestion') idQuestion: UUID) {
    return this.questionsService.getAnswersByIdQuestion(idQuestion);
  }

  @Post('/seed')
  seed(@Body() seedDto: SeedDto) {
    return this.questionsService.seedExecute(seedDto.currentMinutes);
  }
}
