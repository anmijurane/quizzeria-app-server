import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities';
import { saftySeedExecute } from 'src/utils/utils';
import { LoggerApp } from 'src/utils/Logger';
import { subject_seed } from 'seed/subject.seed';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async seedExecute(minutesBody: number) {
    LoggerApp.Instance.info('subjects.service > create_from_seed');
    if (saftySeedExecute(minutesBody)) {
      await this.subjectRepository
        .createQueryBuilder()
        .delete()
        .from(Subject)
        .execute();

      await this.subjectRepository
        .createQueryBuilder()
        .insert()
        .values(subject_seed)
        .execute();
      return `SEED EXECUTES WITH ${subject_seed.length} ITEMS`;
    }
  }

  async findAll() {
    return (await this.subjectRepository.find()).map((subject) => ({
      ...subject,
      status: 'NO_INITIALIZED',
    }));
  }
}
