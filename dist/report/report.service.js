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
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ReportService = class ReportService {
    constructor(reportModel) {
        this.reportModel = reportModel;
    }
    async add(planer) {
        const newO = new this.reportModel(planer);
        return (await newO.save()).id;
    }
    async get() {
        return this.reportModel.find();
    }
    async getById(id) {
        return this.reportModel.findById(id);
    }
    async delete(id) {
        return await this.reportModel.findByIdAndDelete(id);
    }
    async update(id, data) {
        return await this.reportModel.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Report')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReportService);
//# sourceMappingURL=report.service.js.map