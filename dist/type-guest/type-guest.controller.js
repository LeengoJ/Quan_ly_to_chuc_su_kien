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
exports.TypeGuestController = void 0;
const common_1 = require("@nestjs/common");
const type_guest_service_1 = require("./type-guest.service");
const create_type_guest_1 = require("../common/dtos/type-guest/create-type-guest");
let TypeGuestController = class TypeGuestController {
    constructor(typeGuestService) {
        this.typeGuestService = typeGuestService;
    }
    async create(typeEventData) {
        return await this.typeGuestService.add(typeEventData);
    }
    async findAll() {
        return await this.typeGuestService.get();
    }
    async findOne(id) {
        return await this.typeGuestService.getById(id);
    }
    async delete(id) {
        await this.typeGuestService.delete(id);
    }
    async update(id, typeEventData) {
        return await this.typeGuestService.update(id, typeEventData);
    }
};
exports.TypeGuestController = TypeGuestController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_type_guest_1.CreateTypeGuest]),
    __metadata("design:returntype", Promise)
], TypeGuestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeGuestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TypeGuestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TypeGuestController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TypeGuestController.prototype, "update", null);
exports.TypeGuestController = TypeGuestController = __decorate([
    (0, common_1.Controller)('type-guest'),
    __metadata("design:paramtypes", [type_guest_service_1.TypeGuestService])
], TypeGuestController);
//# sourceMappingURL=type-guest.controller.js.map