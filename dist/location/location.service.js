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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const phong_hoi_nghi_service_1 = require("../phong-hoi-nghi/phong-hoi-nghi.service");
const lich_service_1 = require("../lich/lich.service");
const phong_ngu_service_1 = require("../phong-ngu/phong-ngu.service");
let LocationService = class LocationService {
    constructor(locationModel, phongHoiNghiService, lichService, phongNgu) {
        this.locationModel = locationModel;
        this.phongHoiNghiService = phongHoiNghiService;
        this.lichService = lichService;
        this.phongNgu = phongNgu;
    }
    async getAll() {
        await this.locationModel.find();
    }
    createNewLocation(location) {
        const newLocation = new this.locationModel(location);
        return newLocation.save();
    }
    findById(locationId) {
        return this.locationModel.findOne({ _id: locationId });
    }
    deleteLocation(LocationId) {
        this.locationModel.findByIdAndDelete(LocationId);
    }
    updateInfoLocation(LocationId, dataLocation) {
        return this.locationModel.findByIdAndUpdate(LocationId, dataLocation, { new: true });
    }
    async checkLichDatPhongHoiNghiTheoNgayGioVaDiaDiemToChuc(date, LocationId, timeStart, timeDone) {
        let phongHoiNghi1 = await this.phongHoiNghiService.findByLocationId(LocationId);
        if (phongHoiNghi1) {
            var count = 0;
            for (let i = 0; i < phongHoiNghi1.length; i++) {
                let check = await this.lichService.isAppointmentAvailableMeeting(phongHoiNghi1[i].id, date, timeStart, timeDone);
                if (check)
                    count++;
            }
            if (count > 0)
                return true;
            else
                return false;
        }
        else
            throw new common_1.NotFoundException("Phong nay khong ton tai");
    }
    async checkLichDatPhongHoiNghiTheoNgayVaDiaDiemToChuc(LocationId, dateStart, dateDone) {
        let phongHoiNghi1 = await this.phongHoiNghiService.findByLocationId(LocationId);
        if (phongHoiNghi1) {
            var count = 0;
            for (let i = 0; i < phongHoiNghi1.length; i++) {
                let check = await this.lichService.isAppointmentAvailableMeetingLongDay(phongHoiNghi1[i].id, dateStart, dateDone);
                if (check)
                    count++;
            }
            if (count > 0)
                return true;
            else
                return false;
        }
        else
            throw new common_1.NotFoundException("Phong nay khong ton tai");
    }
    async danhSachPhongHoiNghiLoaiLonConTrongCuaDiaDiemNay(LocationId) {
        let phonghoinghi = await this.phongHoiNghiService.findByLocationId(LocationId);
        if (phonghoinghi) {
            phonghoinghi = phonghoinghi.filter((phong) => {
                return phong.soGheNgoi >= 50;
            });
            return phonghoinghi;
        }
        return null;
    }
    async danhSachPhongHoiNghiLoaiVuaConTrongCuaDiaDiemNay(LocationId) {
        let phonghoinghi = await this.phongHoiNghiService.findByLocationId(LocationId);
        if (phonghoinghi) {
            phonghoinghi = phonghoinghi.filter((phong) => {
                return phong.soGheNgoi >= 20 && phong.soGheNgoi <= 50;
            });
            return phonghoinghi;
        }
        return null;
    }
    async danhSachPhongHoiNghiLoaiNhoConTrongCuaDiaDiemNay(LocationId) {
        let phonghoinghi = await this.phongHoiNghiService.findByLocationId(LocationId);
        if (phonghoinghi) {
            phonghoinghi = phonghoinghi.filter((phong) => {
                return phong.soGheNgoi <= 20;
            });
            return phonghoinghi;
        }
        return null;
    }
    async reviewLocation_region_Nation_provinceCity(region, Nation, provinceCity) {
        let filteredLocations = [];
        if (region) {
            const locationRegion = await this.locationModel.find({ region });
            filteredLocations.push(...locationRegion);
            if (Nation) {
                const locationRegion1 = filteredLocations.filter((location) => location.Nation === Nation);
                filteredLocations = locationRegion1;
                if (provinceCity) {
                    const locationRegion2 = filteredLocations.filter((location) => location.provinceCity === provinceCity);
                    filteredLocations = locationRegion2;
                    return filteredLocations;
                }
                return filteredLocations;
            }
            return filteredLocations;
        }
        else if (Nation) {
            const locationRegion1 = filteredLocations.filter((location) => location.Nation === Nation);
            filteredLocations = locationRegion1;
            if (provinceCity) {
                const locationRegion2 = filteredLocations.filter((location) => location.provinceCity === provinceCity);
                filteredLocations = locationRegion2;
                return filteredLocations;
            }
            return filteredLocations;
        }
        else if (provinceCity) {
            const locationRegion2 = filteredLocations.filter((location) => location.provinceCity === provinceCity);
            filteredLocations = locationRegion2;
            return filteredLocations;
        }
        return filteredLocations;
    }
    async reviewLocation_peopleInEvent_peopleStayOverNight(locations, peopleInEvent, peopleStayOverNight) {
        const locationRegion = locations.filter((location) => this.checkPhongHoiNghi(location.id, peopleInEvent));
        locations = locationRegion;
        const locationRegion2 = locations.filter((location) => this.checkPhongHoiNghi(location.id, peopleStayOverNight));
        locations = locationRegion2;
        const locationRegion3 = locations.filter((location) => this.checkPhongNgu(location.id, peopleInEvent));
        locations = locationRegion3;
        return locations;
    }
    getListPhongHoiNghi(LocationId) {
        return this.phongHoiNghiService.findPhongHoiNghiByIdLocation(LocationId);
    }
    async checkPhongHoiNghi(LocationId, soNguoi) {
        let list = await this.phongHoiNghiService.findPhongHoiNghiByIdLocation(LocationId);
        if (list) {
            for (let phn = 0; phn < list.length; phn++) {
                if (list[phn].soGheNgoi > soNguoi)
                    return true;
            }
            return false;
        }
        return false;
    }
    async checkPhongNgu(LocationId, soNguoi) {
        let count = await this.phongNgu.laySucChuaCuaNoiToChucSuKien(LocationId);
        if (count > soNguoi) {
            return true;
        }
        return false;
    }
    async reviewLocation(revL) {
        let filteredLocations = await this.reviewLocation_region_Nation_provinceCity(revL.region, revL.Nation, revL.provinceCity);
        if (filteredLocations) {
            let filteredLocations2 = await this.reviewLocation_peopleInEvent_peopleStayOverNight(filteredLocations, revL.peopleInEvent, revL.peopleStayOverNight);
            filteredLocations2 = filteredLocations2.filter(async (location) => {
                const isAvailable = await this.checkLichDatPhongHoiNghiTheoNgayVaDiaDiemToChuc(location.id, revL.dateStart, revL.dateFinish);
                return isAvailable;
            });
            return filteredLocations2;
        }
        else {
            return null;
        }
    }
};
exports.LocationService = LocationService;
exports.LocationService = LocationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Location')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        phong_hoi_nghi_service_1.PhongHoiNghiService,
        lich_service_1.LichService,
        phong_ngu_service_1.PhongNguService])
], LocationService);
//# sourceMappingURL=location.service.js.map