import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  const port = process.env.PORT ?? 3000;
  const host = process.env.HOST || '0.0.0.0';

  await app.listen(port, host);  
  console.log("LET'S GO")
}
bootstrap();
