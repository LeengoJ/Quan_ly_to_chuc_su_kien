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
exports.PhongNguController = void 0;
const common_1 = require("@nestjs/common");
const phong_ngu_service_1 = require("./phong-ngu.service");
const create_phongngu_dto_1 = require("../common/dtos/phong-ngu-dto/create-phongngu-dto");
let PhongNguController = class PhongNguController {
    constructor(phongNguService) {
        this.phongNguService = phongNguService;
    }
    async create(PhongNguData) {
        return await this.phongNguService.addPhongNGu(PhongNguData);
    }
    async findAll() {
        return await this.phongNguService.findAll();
    }
    async findOne(id) {
        return await this.phongNguService.getById(id);
    }
    async delete(id) {
        await this.phongNguService.delete(id);
    }
    async update(id, PhongNguData) {
        return await this.phongNguService.update(id, PhongNguData);
    }
};
exports.PhongNguController = PhongNguController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phongngu_dto_1.PhongNguDto]),
    __metadata("design:returntype", Promise)
], PhongNguController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhongNguController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhongNguController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhongNguController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PhongNguController.prototype, "update", null);
exports.PhongNguController = PhongNguController = __decorate([
    (0, common_1.Controller)('phong-ngu'),
    __metadata("design:paramtypes", [phong_ngu_service_1.PhongNguService])
], PhongNguController);
//# sourceMappingURL=phong-ngu.controller.js.map