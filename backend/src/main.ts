import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix(`/api/v${process.env.API_VERSION}`);
  await app.listen(8080);
}
bootstrap();
