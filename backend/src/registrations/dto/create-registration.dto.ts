// backend/src/registrations/dto/create-registration.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateRegistrationDto {
    @ApiProperty()
    eventId: string; // ID do evento (string do ObjectId)

    @ApiProperty({ required: false })
    participantId?: string;
}
