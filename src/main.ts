import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const corsOptions = {
    origin: [
      configService.get('FRONTEND_LOCAL'),
      configService.get('FRONTEND_PROD'),
    ].filter(origin => origin), 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
  };

  app.enableCors(corsOptions);

  const port = configService.get('PORT') || 3001;
  await app.listen(port);
  console.log(`Server running on port ${port}`);
  console.log('Allowed origins:', corsOptions.origin);
}
bootstrap();