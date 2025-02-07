// backend/src/events/dto/create-event.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
    @ApiProperty()
    title: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    date: string; // ou Date
}
