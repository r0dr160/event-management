// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS
  app.enableCors();

  // Configurar Swagger
  const config = new DocumentBuilder()
      .setTitle('Event Management')
      .setDescription('API para gestão de eventos e inscrições anónimas')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Iniciar a aplicação
  const port = process.env.APP_PORT || 3000;
  await app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger on http://localhost:${port}/api`);
  });
}
bootstrap();
