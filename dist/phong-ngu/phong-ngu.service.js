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
exports.PhongNguService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PhongNguService = class PhongNguService {
    constructor(phongNguModel) {
        this.phongNguModel = phongNguModel;
    }
    findAll() {
        return this.phongNguModel.find();
    }
    async findPhongNguByIdLocation(IdLocation) {
        let Room = [];
        Room = await this.phongNguModel.find({ LocationId: IdLocation });
        return Room;
    }
    async countPhongNguByIdLocation(IdLocation) {
        let Room = [];
        Room = await this.phongNguModel.find({ LocationId: IdLocation });
        return Room.length;
    }
    async findByLocationId(LocationId) {
        return await this.phongNguModel.find({ LocationId: LocationId });
    }
    async layKichCoCuaPhongNgu(id) {
        const phong = await this.phongNguModel.findById(id);
        if (phong)
            return phong.soGiuong;
        else
            return null;
    }
    async laySucChuaCuaNoiToChucSuKien(LocationId) {
        const phongNgu = await this.phongNguModel.find({ LocationId });
        let count = 0;
        for (let i = 0; i < phongNgu.length; i++) {
            if (phongNgu[i].LoaiPhong == "big")
                count = count + phongNgu[i].soGiuong * 2;
            else if (phongNgu[i].LoaiPhong == "small")
                count = count + phongNgu[i].soGiuong;
        }
        return count;
    }
    async addPhongNGu(phongNgu) {
        const newPhongNgu = new this.phongNguModel();
        newPhongNgu.tenPhong = phongNgu.tenPhong;
        newPhongNgu.soGiuong = phongNgu.soGiuong;
        newPhongNgu.LoaiPhong = phongNgu.LoaiPhong;
        newPhongNgu.LocationId = phongNgu.LocationId;
        newPhongNgu.save();
    }
    async getById(id) {
        return this.phongNguModel.findById(id);
    }
    async delete(id) {
        return await this.phongNguModel.findByIdAndDelete(id);
    }
    async update(id, data) {
        return await this.phongNguModel.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.PhongNguService = PhongNguService;
exports.PhongNguService = PhongNguService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('PhongNgu')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PhongNguService);
//# sourceMappingURL=phong-ngu.service.js.map