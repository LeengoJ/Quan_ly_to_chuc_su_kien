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
exports.OrganizationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrganizationService = class OrganizationService {
    constructor(OganizationModel) {
        this.OganizationModel = OganizationModel;
    }
    async addOrganization(Or) {
        const newO = new this.OganizationModel(Or);
        return (await newO.save()).id;
    }
    async getOrganizations() {
        return this.OganizationModel.find();
    }
    async getOrganizationById(id) {
        return this.OganizationModel.findById(id);
    }
    async deleteOrganization(id) {
        return await this.OganizationModel.findByIdAndDelete(id);
    }
    async updateIp(id, data) {
        return await this.OganizationModel.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.OrganizationService = OrganizationService;
exports.OrganizationService = OrganizationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Organization')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrganizationService);
//# sourceMappingURL=oganization.service.js.map