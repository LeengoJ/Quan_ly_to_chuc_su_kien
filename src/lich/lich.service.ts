import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LichDocument } from './lich.schema';
import { Model } from 'mongoose';
import { PhongHoiNghi, PhongHoiNghiDocument } from 'src/phong-hoi-nghi/phong-hoi-nghi.schema';
import { PhongHoiNghiService } from 'src/phong-hoi-nghi/phong-hoi-nghi.service';
import { CreateLichDto } from 'src/common/dtos/lich-dto/create-lich-dto';


@Injectable()
export class LichService {
    constructor(@InjectModel('Lich') private readonly lichModel: Model<LichDocument>,
        private phongHoiNghiService: PhongHoiNghiService
    ) { }
    async add(role: CreateLichDto) {
        const newO = new this.lichModel(role)
        return (await newO.save()).id
    }
    //
    async get(): Promise<LichDocument[]> {
        return this.lichModel.find()
    }
    //
    async getById(id: string): Promise<LichDocument | null> {
        return this.lichModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.lichModel.findByIdAndDelete(id)

    }
    // Cập nhật
    async update(id: string, data: Partial<CreateLichDto>) {
        return await this.lichModel.findByIdAndUpdate(id, data, { new: true })
    }
    // Lấy role bằng tên role
    async getbyName(name: string): Promise<LichDocument | null> {
        return await this.lichModel.findOne({ name })
    }
    //Đặt lịch phòng hội nghị cho sự kiện
    async datLichChoPhongHoiNghi(PhongHoiNghiId: string, date: Date, startTime: Date, endTime: Date, EventId: string) {
        if (await this.isAppointmentAvailableMeeting(PhongHoiNghiId, date, startTime, endTime) == true) {
            const lichMoi = new this.lichModel({
                PhongHoiNghiId,
                date,
                startTime,
                endTime,
                EventId
            })
            return await lichMoi.save()
        } else throw new NotFoundException('Ngay nay da duoc dat lich roi');

    }
    //Đặt lịch phòng ngủ cho sự kiện
    async datLichPhongNgu(PhongNguId: string, date: Date, startTime: Date, endTime: Date) {
        if (await this.isAppointmentAvailableSleep(PhongNguId, date, startTime, endTime) == true) {
            const lichMoi = new this.lichModel({
                PhongNguId,
                date,
                startTime,
                endTime
            })
            return await lichMoi.save()
        } else throw new NotFoundException('Ngay nay da duoc dat lich roi');
    }
    //Kiểm tra xem phòng ngủ đã được đặt hay chưa
    async isAppointmentAvailableSleep(PhongNguId: string, date: Date, startTime: Date, endTime: Date) {
        // Lấy tất cả các lịch trong ngày đó
        const appointments = await this.lichModel.find({
            time: {
                $gte: date,
                $lte: date,
            },
            PhongNguId: PhongNguId
        });

        // Kiểm tra xem có lịch nào trùng với thời gian đặt hay không
        for (const appointment of appointments) {
            if (
                appointment.timeStart >= startTime &&
                appointment.timeStart <= endTime
            ) {
                return false;
            } else if (
                appointment.timeDone >= startTime &&
                appointment.timeDone <= endTime
            ) {
                return false;
            }
        }

        // Nếu không có lịch nào trùng thì lịch trống
        return true;
    };
    //Kiểm tra xem phòng hội nghị đã được đặt hay chưa
    async isAppointmentAvailableMeeting(PhongHoiNghiId: string, date: Date, startTime: Date, endTime: Date) {
        // Lấy tất cả các lịch trong ngày đó
        const appointments = await this.lichModel.find({
            time: {
                $gte: date,
                $lte: date,
            },
            PhongHoiNghiId: PhongHoiNghiId
        });

        // Kiểm tra xem có lịch nào trùng với thời gian đặt hay không
        for (const appointment of appointments) {
            if (
                appointment.timeStart >= startTime &&
                appointment.timeStart <= endTime
            ) {
                return false;
            } else if (
                appointment.timeDone >= startTime &&
                appointment.timeDone <= endTime
            ) {
                return false;
            }
        }

        // Nếu không có lịch nào trùng thì lịch trống
        return true;
    };
    //
    async isAppointmentAvailableMeetingLongDay(PhongHoiNghiId: string, startDate: Date, endDate: Date) {
        // Lấy tất cả các lịch trong chuỗi ngày đó
        const appointments = await this.lichModel.find({
            time: {
                $gte: startDate,
                $lte: endDate,
            },
            PhongHoiNghiId: PhongHoiNghiId
        });
        // Nếu không có lịch nào trùng thì lịch trống
        return true;
    };
    //phòng hội nghị còn trống lịch trong thời gian nhất định
    async countPhongHoiNghiTrongTrongThoiGianNhatDinh(date: Date) {

        let timeStart = new Date(date)
        timeStart.setHours(0, 0, 0, 0)
        let timeDone = new Date(date)
        timeDone.setHours(24, 0, 0, 0)

        let danhsachphong: PhongHoiNghiDocument[] = []
        danhsachphong = await this.phongHoiNghiService.findAll()
        let danhSachPhongTrong: PhongHoiNghi[] = []
        for (let i = 0; i < danhsachphong.length; i++) {
            let bool = await this.isAppointmentAvailableSleep(danhsachphong[i].id, date, timeStart, timeDone)
            if (bool)
                danhSachPhongTrong.push(danhsachphong[i])
        }
        return danhSachPhongTrong
    }
}
