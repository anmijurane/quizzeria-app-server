import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerApp } from './utils/Logger';

async function bootstrap() {
  const portListening = process.env.PORT_API;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(portListening);

  const log = LoggerApp.Instance;
  log.info(`[UP] Listening app in port ${portListening}`);
}
bootstrap();
