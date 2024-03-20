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
exports.PlanerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PlanerService = class PlanerService {
    constructor(PlanerModel) {
        this.PlanerModel = PlanerModel;
    }
    async addPlaner(planer) {
        const newO = new this.PlanerModel(planer);
        return (await newO.save()).id;
    }
    async getPlaner() {
        return this.PlanerModel.find();
    }
    async getPlanerById(id) {
        return this.PlanerModel.findById(id);
    }
    async deletePlaner(id) {
        return await this.PlanerModel.findByIdAndDelete(id);
    }
    async updateIp(id, data) {
        return await this.PlanerModel.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.PlanerService = PlanerService;
exports.PlanerService = PlanerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Planer')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PlanerService);
//# sourceMappingURL=planer.service.js.map