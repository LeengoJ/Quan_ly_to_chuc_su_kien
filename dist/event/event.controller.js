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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const event_service_1 = require("./event.service");
const update_event_dto_1 = require("../common/dtos/event-dto/update-event-dto");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    async getAllEvents() {
        return this.eventService.findEvent();
    }
    async getByName(name) {
        return this.eventService.findByNameEvent(name);
    }
    async createEvent(nameEvent, status, startDate, endDate, outdoorMeetingSpace, eventType, arivingOn, departing, flexible, guestRooms, maxGuest, meetingRoom, maxMeetingRoom, otherOrganization) {
        return this.eventService.createEvent(nameEvent, status, startDate, endDate, outdoorMeetingSpace, eventType, arivingOn, departing, flexible, guestRooms, maxGuest, meetingRoom, maxMeetingRoom, otherOrganization);
    }
    async updateEvent(updateEvent, id) {
        return this.eventService.updateEvent(id, updateEvent);
    }
    async delete(id) {
        return this.eventService.adminDelete(id);
    }
};
exports.EventController = EventController;
__decorate([
    (0, common_1.Get)('get-all-event'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getAllEvents", null);
__decorate([
    (0, common_1.Get)('get-by-name'),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getByName", null);
__decorate([
    (0, common_1.Post)('create-event'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, Date, Date, Boolean, String, Date, Date, Boolean, Boolean, Number, Boolean, Number, Boolean]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "createEvent", null);
__decorate([
    (0, common_1.Put)('updateEvent'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_event_dto_1.UpdateEventDto, String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "updateEvent", null);
__decorate([
    (0, common_1.Delete)('delete-Event'),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "delete", null);
exports.EventController = EventController = __decorate([
    (0, common_1.Controller)('event'),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
//# sourceMappingURL=event.controller.js.map