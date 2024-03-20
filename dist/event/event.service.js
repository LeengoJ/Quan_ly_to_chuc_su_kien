"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EventService = class EventService {
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async createEvent(nameEvent, status, startDate, endDate, outdoorMeetingSpace, eventType, arivingOn, departing, flexible, guestRooms, maxGuest, meetingRoom, maxMeetingRoom, otherOrganization) {
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
            throw new common_1.NotFoundException('The type of this event is valid');
        if (arivingOn >= departing)
            throw new common_1.NotFoundException('Ngày đón tiếp phải lớn hơn hoặc bằng ngày tổ chức sự kiện');
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
        });
        return await newEvent.save();
    }
    async updateEvent(id, updatedUserData) {
        const updatedUser = await this.eventModel.findByIdAndUpdate(id, updatedUserData, { new: true });
        if (!updatedUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return updatedUser;
    }
    async adminDelete(id) {
        return await this.eventModel.findByIdAndDelete(id);
    }
    async userDelete(id) {
        return await this.eventModel.findByIdAndDelete(id);
    }
    async findByNameEvent(name) {
        return await this.eventModel.find({ nameEvent: name });
    }
    async findEvent() {
        return await this.eventModel.find();
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Event')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventService);
//# sourceMappingURL=event.service.js.map