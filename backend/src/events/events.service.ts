// backend/src/events/events.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './schemas/event.schema';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class EventsService {
    constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

    async createEvent(eventData: Partial<Event>): Promise<Event> {
        const newEvent = new this.eventModel(eventData);
        return newEvent.save();
    }

    async findAll(): Promise<Event[]> {
        return this.eventModel.find().exec();
    }

    async findById(id: string): Promise<Event> {
        const event = await this.eventModel.findById(id).exec();
        if (!event) {
            throw new NotFoundException(`Event with ID "${id}" not found`);
        }
        return event;
    }
}
