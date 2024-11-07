import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresTypeORMModule } from './modules.exports';

@Module({
  imports: [ConfigModule.forRoot(), PostgresTypeORMModule()],
  controllers: [],
  providers: [],
})
export class AppModule {}
