// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';
import { RegistrationsModule } from './registrations/registrations.module';

@Module({
  imports: [
    // Carrega o .env
    ConfigModule.forRoot(),
    // Conecta ao MongoDB
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/meu-db'),
    // Módulos da aplicação
    EventsModule,
    RegistrationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
