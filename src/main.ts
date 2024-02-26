import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import serverless = require('serverless-http');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = '.netlify/functions/main';
  app.setGlobalPrefix(globalPrefix);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverless(expressApp)
}

let server;
export const handler = async (event, context, callback) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {cors: true});
//   app.setGlobalPrefix('api');
//   app.useGlobalPipes(new ValidationPipe())
//   app.enableCors();
//   await app.listen(3000);
//   console.log("LET'S GO")
// }
// bootstrap();
