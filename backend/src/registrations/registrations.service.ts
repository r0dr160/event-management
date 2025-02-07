// backend/src/registrations/registrations.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registration } from './schemas/registration.schema';

@Injectable()
export class RegistrationsService {
    constructor(
        @InjectModel(Registration.name)
        private registrationModel: Model<Registration>,
    ) {}

    async createRegistration(eventId: string, participantId: string) {
        const newReg = new this.registrationModel({ eventId, participantId });
        return newReg.save();
    }

    async findAll(): Promise<Registration[]> {
        return this.registrationModel.find().exec();
    }

    async findByEvent(eventId: string): Promise<Registration[]> {
        return this.registrationModel.find({ eventId }).exec();
    }
}
