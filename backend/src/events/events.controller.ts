// backend/src/events/events.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateEventDto } from './dto/create-event.dto'; // <--- import DTO
import { Event } from './schemas/event.schema';

@ApiTags('Events')
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Post()
    @ApiBody({ type: CreateEventDto }) // <--- opcional, mas ajuda
    async create(@Body() eventData: CreateEventDto): Promise<Event> {
        return this.eventsService.createEvent(eventData);
    }

    @Get()
    async findAll(): Promise<Event[]> {
        return this.eventsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Event> {
        return this.eventsService.findById(id);
    }
}
