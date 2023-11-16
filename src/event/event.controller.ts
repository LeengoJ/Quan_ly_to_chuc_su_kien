import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { UpdateEventDto } from 'src/common/dtos/event-dto/update-event-dto';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) { }

    @Get('get-all-event')
    async getAllEvents() {
        return this.eventService.findEvent()
    }

    @Get('get-by-name')
    async getByName(@Param("name") name: string) {
        return this.eventService.findByNameEvent(name);
    }

    @Post('create-event')
    async createEvent(
        @Body() nameEvent: string, status: boolean, startDate: Date, endDate: Date, outdoorMeetingSpace: boolean, eventType: string, arivingOn: Date, departing: Date, flexible: boolean, guestRooms: boolean, maxGuest: number, meetingRoom: boolean, maxMeetingRoom: number, otherOrganization: boolean) {
        return this.eventService.createEvent(nameEvent, status, startDate, endDate, outdoorMeetingSpace, eventType, arivingOn, departing, flexible, guestRooms, maxGuest, meetingRoom, maxMeetingRoom, otherOrganization)
    }

    @Put('updateEvent')
    async updateEvent(
        @Body() updateEvent: UpdateEventDto,
        @Param("id", ParseIntPipe) id: string,
    ) {
        return this.eventService.updateEvent(id, updateEvent);
    }
    @Delete('delete-Event')
    async delete(@Param("id", ParseIntPipe) id: string,) {
        return this.eventService.adminDelete(id)
    }
}
