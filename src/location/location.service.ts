import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LocationDocument } from './location.schema';
import { Model } from 'mongoose';
import { PhongHoiNghiService } from 'src/phong-hoi-nghi/phong-hoi-nghi.service';
import { PhongHoiNghiDocument } from 'src/phong-hoi-nghi/phong-hoi-nghi.schema';
import { LichService } from 'src/lich/lich.service';
import { PhongNguService } from 'src/phong-ngu/phong-ngu.service';
import { createLocationDto } from 'src/common/dtos/location-dto/create-location-dto';
import { reviewLocationDto } from 'src/common/dtos/location-dto/review-location-dto';



@Injectable()
export class LocationService {
    constructor(
        @InjectModel('Location') private readonly locationModel: Model<LocationDocument>,
        private phongHoiNghiService: PhongHoiNghiService,
        private lichService: LichService,
        private phongNgu: PhongNguService
    ) { }
    //Lấy danh sách thông tin dịa điểm
    async getAll() {
        await this.locationModel.find()
    }
    //Tạo 1 địa điểm mới
    createNewLocation(location: createLocationDto) {
        const newLocation = new this.locationModel(location);
        return newLocation.save()
    }
    //Tìm Địa điểm thông qua id
    findById(locationId: string): Promise<any> {
        return this.locationModel.findOne({ _id: locationId });
    }
    //Xóa địa điểm 
    deleteLocation(LocationId: string) {
        this.locationModel.findByIdAndDelete(LocationId)
    }
    //Sửa thông tin địa điểm
    updateInfoLocation(LocationId: string, dataLocation: Partial<LocationDocument>) {
        return this.locationModel.findByIdAndUpdate(LocationId, dataLocation, { new: true })
    }
    async checkLichDatPhongHoiNghiTheoNgayGioVaDiaDiemToChuc(date: Date, LocationId: string, timeStart: Date, timeDone: Date) {
        let phongHoiNghi1: PhongHoiNghiDocument[] | null = await this.phongHoiNghiService.findByLocationId(LocationId)
        // h
        if (phongHoiNghi1) {
            var count = 0
            for (let i = 0; i < phongHoiNghi1.length; i++) {
                let check = await this.lichService.isAppointmentAvailableMeeting(phongHoiNghi1[i].id, date, timeStart, timeDone)
                if (check)
                    count++
            }
            if (count > 0)
                return true
            else return false
        } else
            throw new NotFoundException("Phong nay khong ton tai")
    }
    async checkLichDatPhongHoiNghiTheoNgayVaDiaDiemToChuc(LocationId: string, dateStart: Date, dateDone: Date) {
        let phongHoiNghi1: PhongHoiNghiDocument[] | null = await this.phongHoiNghiService.findByLocationId(LocationId)
        // h
        if (phongHoiNghi1) {
            var count = 0
            for (let i = 0; i < phongHoiNghi1.length; i++) {
                let check = await this.lichService.isAppointmentAvailableMeetingLongDay(phongHoiNghi1[i].id, dateStart, dateDone)
                if (check)
                    count++
            }
            if (count > 0)
                return true
            else return false
        } else
            throw new NotFoundException("Phong nay khong ton tai")
    }
    //Danh sach phong hoi nghi loai lon cua dia diem nay
    async danhSachPhongHoiNghiLoaiLonConTrongCuaDiaDiemNay(LocationId: string): Promise<PhongHoiNghiDocument[] | null> {
        let phonghoinghi: PhongHoiNghiDocument[] | null = await this.phongHoiNghiService.findByLocationId(LocationId)
        if (phonghoinghi) {
            phonghoinghi = phonghoinghi.filter((phong) => {
                return phong.soGheNgoi >= 50;
            });
            return phonghoinghi;
        }
        return null
    }
    //Danh sach phong hoi nghi loai vua cua dia diem nay
    async danhSachPhongHoiNghiLoaiVuaConTrongCuaDiaDiemNay(LocationId: string): Promise<PhongHoiNghiDocument[] | null> {
        let phonghoinghi: PhongHoiNghiDocument[] | null = await this.phongHoiNghiService.findByLocationId(LocationId)
        if (phonghoinghi) {
            phonghoinghi = phonghoinghi.filter((phong) => {
                return phong.soGheNgoi >= 20 && phong.soGheNgoi <= 50;
            });
            return phonghoinghi;
        }
        return null
    }
    //Danh sach phong hoi nghi loai nho cua dia diem nay
    async danhSachPhongHoiNghiLoaiNhoConTrongCuaDiaDiemNay(LocationId: string): Promise<PhongHoiNghiDocument[] | null> {
        let phonghoinghi: PhongHoiNghiDocument[] | null = await this.phongHoiNghiService.findByLocationId(LocationId)
        if (phonghoinghi) {
            phonghoinghi = phonghoinghi.filter((phong) => {
                return phong.soGheNgoi <= 20;
            });
            return phonghoinghi;
        }
        return null
    }
    //De cu dia diem
    async reviewLocation_region_Nation_provinceCity(
        region: string,
        Nation: string,
        provinceCity: string,
    ): Promise<LocationDocument[] | null> {
        //// Tạo một mảng trống để lưu trữ các vị trí đã lọc.
        let filteredLocations: LocationDocument[] = [];

        if (region) {
            const locationRegion = await this.locationModel.find({ region });
            filteredLocations.push(...locationRegion);
            if (Nation) {
                const locationRegion1 = filteredLocations.filter((location) => location.Nation === Nation);
                filteredLocations = locationRegion1;
                if (provinceCity) {
                    const locationRegion2 = filteredLocations.filter((location) => location.provinceCity === provinceCity
                    );
                    filteredLocations = locationRegion2;
                    return filteredLocations;
                }
                return filteredLocations;
            }
            return filteredLocations;
        } else if (Nation) {
            const locationRegion1 = filteredLocations.filter((location) =>
                location.Nation === Nation
            );
            filteredLocations = locationRegion1;
            if (provinceCity) {
                const locationRegion2 = filteredLocations.filter((location) =>
                    location.provinceCity === provinceCity
                );
                filteredLocations = locationRegion2;
                return filteredLocations;
            }
            return filteredLocations;
        } else if (provinceCity) {
            const locationRegion2 = filteredLocations.filter((location) =>
                location.provinceCity === provinceCity
            );
            filteredLocations = locationRegion2;
            return filteredLocations;
        }
        return filteredLocations;
        // Return the filtered locations.
    }
    //
    async reviewLocation_peopleInEvent_peopleStayOverNight(locations: LocationDocument[], peopleInEvent: number, peopleStayOverNight: number) {
        const locationRegion = locations.filter((location) =>
            this.checkPhongHoiNghi(location.id, peopleInEvent)
        );
        locations = locationRegion;
        //Lọc các địa điểm có phong hoi nghi hợp lý
        const locationRegion2 = locations.filter((location) =>
            this.checkPhongHoiNghi(location.id, peopleStayOverNight)
        );
        locations = locationRegion2;
        //Lọc các địa điểm có đủ phòng ngủ
        const locationRegion3 = locations.filter((location) =>
            this.checkPhongNgu(location.id, peopleInEvent)
        );
        locations = locationRegion3;
        // Trả về danh sách các địa điểm đã lọc.
        return locations;
    }
    //Lấy thông tin danh sách các phòng hội nghị của địa điểm này
    getListPhongHoiNghi(LocationId: string) {
        return this.phongHoiNghiService.findPhongHoiNghiByIdLocation(LocationId)
    }
    //Kiểm tra số ghế trong 1 phòng hội nghi ở 1 địa điểm có đủ để tiếp khách hay không
    async checkPhongHoiNghi(LocationId: string, soNguoi: number) {
        let list = await this.phongHoiNghiService.findPhongHoiNghiByIdLocation(LocationId)
        if (list) {
            for (let phn = 0; phn < list.length; phn++) {
                if (list[phn].soGheNgoi > soNguoi)
                    return true
            }
            return false
        }
        return false
    }
    //Kiểm tra số ghế trong 1 phòng hội nghi ở 1 địa điểm có đủ để tiếp khách hay không
    async checkPhongNgu(LocationId: string, soNguoi: number) {
        let count = await this.phongNgu.laySucChuaCuaNoiToChucSuKien(LocationId)
        if (count > soNguoi) {
            return true
        }
        return false
    }
    //
    async reviewLocation(revL: reviewLocationDto) {
        // Lọc các địa điểm theo khu vực, quốc gia, tỉnh/thành phố.
        let filteredLocations = await this.reviewLocation_region_Nation_provinceCity(revL.region, revL.Nation, revL.provinceCity);

        // Lọc các địa điểm theo số lượng ghế và số lượng người ở lại qua đêm.
        if (filteredLocations) {
            let filteredLocations2 = await this.reviewLocation_peopleInEvent_peopleStayOverNight(filteredLocations, revL.peopleInEvent, revL.peopleStayOverNight);

            // Lọc các địa điểm theo lịch đặt phòng hội nghị.
            filteredLocations2 = filteredLocations2.filter(async (location) => {
                const isAvailable = await this.checkLichDatPhongHoiNghiTheoNgayVaDiaDiemToChuc(location.id, revL.dateStart, revL.dateFinish);
                return isAvailable;
            });

            // Trả về danh sách các địa điểm đã lọc.
            return filteredLocations2;
        } else {
            // Nếu không có địa điểm nào đáp ứng các điều kiện lọc thì trả về `null`.
            return null;
        }
    }
    //duyệt
}
