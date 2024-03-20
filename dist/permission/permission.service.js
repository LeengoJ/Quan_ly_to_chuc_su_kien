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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PermissionService = class PermissionService {
    constructor(PermissionModel) {
        this.PermissionModel = PermissionModel;
    }
    async add(planer) {
        const newO = new this.PermissionModel(planer);
        return (await newO.save()).id;
    }
    async get() {
        return this.PermissionModel.find();
    }
    async getById(id) {
        return this.PermissionModel.findById(id);
    }
    async delete(id) {
        return await this.PermissionModel.findByIdAndDelete(id);
    }
    async update(id, data) {
        return await this.PermissionModel.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.PermissionService = PermissionService;
exports.PermissionService = PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Permission')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PermissionService);
//# sourceMappingURL=permission.service.js.map