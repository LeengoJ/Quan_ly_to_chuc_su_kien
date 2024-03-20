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
exports.LichService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const phong_hoi_nghi_service_1 = require("../phong-hoi-nghi/phong-hoi-nghi.service");
let LichService = class LichService {
    constructor(lichModel, phongHoiNghiService) {
        this.lichModel = lichModel;
        this.phongHoiNghiService = phongHoiNghiService;
    }
    async add(role) {
        const newO = new this.lichModel(role);
        return (await newO.save()).id;
    }
    async get() {
        return this.lichModel.find();
    }
    async getById(id) {
        return this.lichModel.findById(id);
    }
    async delete(id) {
        return await this.lichModel.findByIdAndDelete(id);
    }
    async update(id, data) {
        return await this.lichModel.findByIdAndUpdate(id, data, { new: true });
    }
    async getbyName(name) {
        return await this.lichModel.findOne({ name });
    }
    async datLichChoPhongHoiNghi(PhongHoiNghiId, date, startTime, endTime, EventId) {
        if (await this.isAppointmentAvailableMeeting(PhongHoiNghiId, date, startTime, endTime) == true) {
            const lichMoi = new this.lichModel({
                PhongHoiNghiId,
                date,
                startTime,
                endTime,
                EventId
            });
            return await lichMoi.save();
        }
        else
            throw new common_1.NotFoundException('Ngay nay da duoc dat lich roi');
    }
    async datLichPhongNgu(PhongNguId, date, startTime, endTime) {
        if (await this.isAppointmentAvailableSleep(PhongNguId, date, startTime, endTime) == true) {
            const lichMoi = new this.lichModel({
                PhongNguId,
                date,
                startTime,
                endTime
            });
            return await lichMoi.save();
        }
        else
            throw new common_1.NotFoundException('Ngay nay da duoc dat lich roi');
    }
    async isAppointmentAvailableSleep(PhongNguId, date, startTime, endTime) {
        const appointments = await this.lichModel.find({
            time: {
                $gte: date,
                $lte: date,
            },
            PhongNguId: PhongNguId
        });
        for (const appointment of appointments) {
            if (appointment.timeStart >= startTime &&
                appointment.timeStart <= endTime) {
                return false;
            }
            else if (appointment.timeDone >= startTime &&
                appointment.timeDone <= endTime) {
                return false;
            }
        }
        return true;
    }
    ;
    async isAppointmentAvailableMeeting(PhongHoiNghiId, date, startTime, endTime) {
        const appointments = await this.lichModel.find({
            time: {
                $gte: date,
                $lte: date,
            },
            PhongHoiNghiId: PhongHoiNghiId
        });
        for (const appointment of appointments) {
            if (appointment.timeStart >= startTime &&
                appointment.timeStart <= endTime) {
                return false;
            }
            else if (appointment.timeDone >= startTime &&
                appointment.timeDone <= endTime) {
                return false;
            }
        }
        return true;
    }
    ;
    async isAppointmentAvailableMeetingLongDay(PhongHoiNghiId, startDate, endDate) {
        const appointments = await this.lichModel.find({
            time: {
                $gte: startDate,
                $lte: endDate,
            },
            PhongHoiNghiId: PhongHoiNghiId
        });
        return true;
    }
    ;
    async countPhongHoiNghiTrongTrongThoiGianNhatDinh(date) {
        let timeStart = new Date(date);
        timeStart.setHours(0, 0, 0, 0);
        let timeDone = new Date(date);
        timeDone.setHours(24, 0, 0, 0);
        let danhsachphong = [];
        danhsachphong = await this.phongHoiNghiService.findAll();
        let danhSachPhongTrong = [];
        for (let i = 0; i < danhsachphong.length; i++) {
            let bool = await this.isAppointmentAvailableSleep(danhsachphong[i].id, date, timeStart, timeDone);
            if (bool)
                danhSachPhongTrong.push(danhsachphong[i]);
        }
        return danhSachPhongTrong;
    }
};
exports.LichService = LichService;
exports.LichService = LichService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Lich')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        phong_hoi_nghi_service_1.PhongHoiNghiService])
], LichService);
//# sourceMappingURL=lich.service.js.map