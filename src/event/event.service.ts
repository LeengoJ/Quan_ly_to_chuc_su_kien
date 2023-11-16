import { Injectable, NotFoundException } from '@nestjs/common';
import { EventDocument } from './event.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateEventDto } from 'src/common/dtos/event-dto/update-event-dto';

@Injectable()
export class EventService {
    constructor(@InjectModel('Event') private readonly eventModel: Model<EventDocument>) { }
    async createEvent(
        nameEvent: string,
        status: boolean,
        startDate: Date,
        endDate: Date,
        outdoorMeetingSpace: boolean,
        eventType: string,
        arivingOn: Date,
        departing: Date,
        flexible: boolean,
        guestRooms: boolean,
        maxGuest: number,
        meetingRoom: boolean,
        maxMeetingRoom: number,
        otherOrganization: boolean): Promise<EventDocument | null> {

        const allowedEventTypes = [
            'Anniversary or birthday', 'Bachelor or bachelorette party',
            'Bar or bat mitzvah',
            'Business meeting',
            'Conference or convention',
            'Corporate event',
            'Customer event',
            'Education or seminar',
            'Fraternity or sorority group',
            'Fundraiser or charity event',
            'Incentive travel',
            'Reception or holiday party',
            'Reunion',
            'Shareholders meeting',
            'Special event',
            'Sports event',
            'Team building event',
            'Tour group or vacation',
            'Trade or consumer show'
        ];
        if (!allowedEventTypes.includes(eventType))
            throw new NotFoundException('The type of this event is valid');
        if (arivingOn >= departing)
            throw new NotFoundException('Ngày đón tiếp phải lớn hơn hoặc bằng ngày tổ chức sự kiện');
        const newEvent = new this.eventModel({
            eventType,
            arivingOn,
            departing,
            flexible,
            guestRooms,
            maxGuest,
            meetingRoom,
            maxMeetingRoom,
            otherOrganization,
            status,
            startDate,
            endDate,
            nameEvent,
            outdoorMeetingSpace
        })
        return await newEvent.save()
    }
    async updateEvent(id: string, updatedUserData: Partial<UpdateEventDto>) {
        const updatedUser = await this.eventModel.findByIdAndUpdate(id, updatedUserData, { new: true });
        if (!updatedUser) {
            throw new NotFoundException('User not found');
        }
        return updatedUser;
    }
    async adminDelete(id: string) {
        return await this.eventModel.findByIdAndDelete(id)
    }
    async userDelete(id: string) {
        return await this.eventModel.findByIdAndDelete(id)
    }
    async findByNameEvent(name: string) {
        return await this.eventModel.find({ nameEvent: name })
    }
    async findEvent() {
        return await this.eventModel.find()
    }
}
