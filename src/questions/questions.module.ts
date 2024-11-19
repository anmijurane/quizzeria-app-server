import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question, Answers } from './entities';
import { Subject } from 'src/subjects/entities';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports: [TypeOrmModule.forFeature([Question, Answers, Subject]), AuthModule],
})
export class QuestionsModule {}
