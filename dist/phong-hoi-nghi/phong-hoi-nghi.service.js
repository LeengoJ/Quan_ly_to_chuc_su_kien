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
exports.PhongHoiNghiService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PhongHoiNghiService = class PhongHoiNghiService {
    constructor(phonghoinghiModel) {
        this.phonghoinghiModel = phonghoinghiModel;
    }
    findAll() {
        return this.phonghoinghiModel.find();
    }
    async findPhongHoiNghiByIdLocation(IdLocation) {
        let Room = [];
        Room = await this.phonghoinghiModel.find({ LocationId: IdLocation });
        return Room;
    }
    async countPhongHoiNghiByIdLocation(IdLocation) {
        let Room = [];
        Room = await this.phonghoinghiModel.find({ LocationId: IdLocation });
        return Room.length;
    }
    async findByLocationId(LocationId) {
        return await this.phonghoinghiModel.find({ LocationId: LocationId });
    }
    async layLoaiPhongHoiNghiById(id) {
        const phong = await this.phonghoinghiModel.findById(id);
        if (phong)
            return phong.statusRoom;
        else
            return "null";
    }
    async layKichCoCuaPhongHoiNghi(id) {
        const phong = await this.phonghoinghiModel.findById(id);
        if (phong)
            return phong.soGheNgoi;
        else
            return null;
    }
    async add(planer) {
        const newO = new this.phonghoinghiModel(planer);
        return (await newO.save()).id;
    }
    async get() {
        return this.phonghoinghiModel.find();
    }
    async getById(id) {
        return this.phonghoinghiModel.findById(id);
    }
    async delete(id) {
        return await this.phonghoinghiModel.findByIdAndDelete(id);
    }
    async update(id, data) {
        return await this.phonghoinghiModel.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.PhongHoiNghiService = PhongHoiNghiService;
exports.PhongHoiNghiService = PhongHoiNghiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('PhongHoiNghi')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PhongHoiNghiService);
//# sourceMappingURL=phong-hoi-nghi.service.js.map