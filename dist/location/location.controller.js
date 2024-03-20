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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const location_service_1 = require("./location.service");
const create_location_dto_1 = require("../common/dtos/location-dto/create-location-dto");
const update_location_dto_1 = require("../common/dtos/location-dto/update-location-dto");
const review_location_dto_1 = require("../common/dtos/location-dto/review-location-dto");
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    createLocation(createLocationDto) {
        this.locationService.createNewLocation(createLocationDto);
    }
    deleteLocation(id) {
        this.locationService.deleteLocation(id);
    }
    updateLocation(id, updateLocation) {
        this.locationService.updateInfoLocation(id, updateLocation);
    }
    reviewLocation(rev) {
        this.locationService.reviewLocation(rev);
    }
    getAll() {
        return this.locationService.getAll();
    }
};
exports.LocationController = LocationController;
__decorate([
    (0, common_1.Post)('create-location:id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_location_dto_1.createLocationDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "createLocation", null);
__decorate([
    (0, common_1.Delete)('delete-location:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "deleteLocation", null);
__decorate([
    (0, common_1.Put)('update-location:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_location_dto_1.updateLocationDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "updateLocation", null);
__decorate([
    (0, common_1.Put)('review-location'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_location_dto_1.reviewLocationDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "reviewLocation", null);
__decorate([
    (0, common_1.Get)('get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getAll", null);
exports.LocationController = LocationController = __decorate([
    (0, common_1.Controller)('location'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
//# sourceMappingURL=location.controller.js.map