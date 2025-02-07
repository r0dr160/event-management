// backend/src/events/schemas/event.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Event extends Document {
    @ApiProperty()
    @Prop({ required: true })
    title: string;

    @ApiProperty()
    @Prop()
    description: string;

    @ApiProperty()
    @Prop({ required: true })
    date: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
