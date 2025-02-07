// backend/src/registrations/schemas/registration.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Registration extends Document {
    @ApiProperty()
    @Prop({ required: true })
    eventId: string; // ID do evento (string, mas é o ObjectId do evento)

    @ApiProperty()
    @Prop({ required: true })
    participantId: string; // gerado ou fornecido no momento da inscrição
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
