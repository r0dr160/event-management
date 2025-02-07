// backend/src/registrations/registrations.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@ApiTags('Registrations')
@Controller('registrations')
export class RegistrationsController {
    constructor(private readonly registrationsService: RegistrationsService) {}

    @Post()
    @ApiBody({ type: CreateRegistrationDto }) // <--- Diz ao Swagger qual objeto esperar
    async register(
        @Body() body: CreateRegistrationDto,
    ) {
        const participantId = body.participantId || randomUUID();
        return this.registrationsService.createRegistration(
            body.eventId,
            participantId,
        );
    }

    @Get()
    async findAll() {
        return this.registrationsService.findAll();
    }
}
