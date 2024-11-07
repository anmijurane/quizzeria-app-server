import { UUID } from 'node:crypto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { saftySeedExecute } from 'src/utils/utils';
import { CreateQuestionDto } from './dto/create-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Answers, Question } from './entities';
import { Repository } from 'typeorm';
import { Subject } from 'src/subjects/entities';
import { questionPhysicSeed } from 'seed/questios.seed';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Answers)
    private readonly answerRepository: Repository<Answers>,
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Answers>,
  ) {}

  /**Only with rol create */
  async create(createQuestionDto: CreateQuestionDto) {
    const { text, answers, subjectId } = createQuestionDto;
    const subject = await this.subjectRepository.findOne({
      where: { id: subjectId },
    });
    const question = this.questionRepository.create({
      text,
      subject,
    });
    const answerToInsert = answers.map((answer) =>
      this.answerRepository.create({
        isCorrect: answer.isCorrect,
        text: answer.text,
        question: question,
      }),
    );
    await this.answerRepository.insert(answerToInsert);
    question.answers = answerToInsert;
    await this.questionRepository.save(question);
    return {
      id: question.id,
      text: question.text,
      subject: {
        id: question.subject.id,
        name: question.subject.name,
      },
      answers: {
        total: question.answers.length,
      },
    };
  }

  async getByIdSubject(idSubject: UUID) {
    try {
      const questions = await this.questionRepository.find({
        where: { subject: { id: idSubject } },
        // relations: { answers: true },
      });
      return {
        questions,
        totalQuestions: questions.length,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getAnswersByIdQuestion(idQuestion: UUID) {
    try {
      const answers = await this.answerRepository.find({
        where: { question: { id: idQuestion } },
        select: { id: true, text: true },
      });
      return {
        answers,
        totalAnswers: answers.length,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async seedExecute(minutesBody: number) {
    if (saftySeedExecute(minutesBody)) {
      for (const question of questionPhysicSeed) {
        await this.create(question);
      }
      return `SEED EXECUTE WITH ${questionPhysicSeed.length} QUESTIONS`;
    }
  }
}
