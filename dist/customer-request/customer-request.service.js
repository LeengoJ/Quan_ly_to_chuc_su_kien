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
exports.CustomerRequestService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const review_location_dto_1 = require("../common/dtos/location-dto/review-location-dto");
const location_service_1 = require("../location/location.service");
let CustomerRequestService = class CustomerRequestService {
    constructor(CusReqModel, locationService) {
        this.CusReqModel = CusReqModel;
        this.locationService = locationService;
    }
    async getLocationByCustomerRequest(req) {
        let eL = new review_location_dto_1.reviewLocationDto;
        eL.Nation = req.where.Nation;
        eL.region = req.where.region;
        eL.provinceCity = req.where.provinceCity;
        eL.dateStart = req.departing;
        eL.dateFinish = req.endDate;
        eL.peopleInEvent = req.attendeePerDay;
        eL.peopleStayOverNight = req.guestRoomPerNight * req.peoplePerGuestRoom;
        const location = await this.locationService.reviewLocation(eL);
        return location;
    }
    async add(planer) {
        const newO = new this.CusReqModel(planer);
        return (await newO.save()).id;
    }
    async get() {
        return this.CusReqModel.find();
    }
    async getById(id) {
        return this.CusReqModel.findById(id);
    }
    async delete(id) {
        return await this.CusReqModel.findByIdAndDelete(id);
    }
    async update(id, data) {
        return await this.CusReqModel.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.CustomerRequestService = CustomerRequestService;
exports.CustomerRequestService = CustomerRequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('CusReq')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        location_service_1.LocationService])
], CustomerRequestService);
//# sourceMappingURL=customer-request.service.js.map