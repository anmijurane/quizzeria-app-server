import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresTypeORMModule } from './modules.exports';
import { SubjectsModule } from './subjects/subjects.module';
import { QuestionsModule } from './questions/questions.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PostgresTypeORMModule(),
    SubjectsModule,
    QuestionsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
