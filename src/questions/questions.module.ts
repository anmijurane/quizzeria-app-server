import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question, Answers } from './entities';
// import { SubjectsModule } from 'src/subjects/subjects.module';
import { Subject } from 'src/subjects/entities';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports: [TypeOrmModule.forFeature([Question, Answers, Subject])],
})
export class QuestionsModule {}
