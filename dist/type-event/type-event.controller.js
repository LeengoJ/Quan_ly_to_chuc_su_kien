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
exports.TypeEventController = void 0;
const common_1 = require("@nestjs/common");
const type_event_service_1 = require("./type-event.service");
const create_type_event_dto_1 = require("../common/dtos/type-event-dto/create-type-event-dto");
let TypeEventController = class TypeEventController {
    constructor(typeEventService) {
        this.typeEventService = typeEventService;
    }
    async create(typeEventData) {
        return await this.typeEventService.add(typeEventData);
    }
    async findAll() {
        return await this.typeEventService.get();
    }
    async findOne(id) {
        return await this.typeEventService.getById(id);
    }
    async delete(id) {
        await this.typeEventService.delete(id);
    }
    async update(id, typeEventData) {
        return await this.typeEventService.update(id, typeEventData);
    }
};
exports.TypeEventController = TypeEventController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_type_event_dto_1.CreateTypeEvent]),
    __metadata("design:returntype", Promise)
], TypeEventController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeEventController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TypeEventController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TypeEventController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TypeEventController.prototype, "update", null);
exports.TypeEventController = TypeEventController = __decorate([
    (0, common_1.Controller)('type-events'),
    __metadata("design:paramtypes", [type_event_service_1.TypeEventService])
], TypeEventController);
//# sourceMappingURL=type-event.controller.js.map