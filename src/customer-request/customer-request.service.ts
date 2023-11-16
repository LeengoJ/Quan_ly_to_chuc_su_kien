import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerRequest } from 'src/common/dtos/customer-request';
import { reviewLocationDto } from 'src/common/dtos/location-dto/review-location-dto';
import { EventService } from 'src/event/event.service';
import { LichService } from 'src/lich/lich.service';
import { LocationService } from 'src/location/location.service';
import { CusReqDocument } from './customer-request.schema';

@Injectable()
export class CustomerRequestService {
    constructor(
        @InjectModel('CusReq') private readonly CusReqModel: Model<CusReqDocument>,
        private locationService: LocationService
    ) { }
    //Tìm dia diem phu hop
    async getLocationByCustomerRequest(req: CustomerRequest) {
        let eL: reviewLocationDto = new reviewLocationDto; // Declare the variable

        eL.Nation = req.where.Nation; // Assign the value to the variable
        eL.region = req.where.region;
        eL.provinceCity = req.where.provinceCity
        eL.dateStart = req.departing
        eL.dateFinish = req.endDate
        eL.peopleInEvent = req.attendeePerDay
        eL.peopleStayOverNight = req.guestRoomPerNight * req.peoplePerGuestRoom
        const location = await this.locationService.reviewLocation(eL);
        return location
    }


    async add(planer: CustomerRequest) {
        const newO = new this.CusReqModel(planer)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async get(): Promise<CusReqDocument[]> {
        return this.CusReqModel.find()
    }
    //
    async getById(id: string): Promise<CusReqDocument | null> {
        return this.CusReqModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.CusReqModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<CustomerRequest>) {
        return await this.CusReqModel.findByIdAndUpdate(id, data, { new: true })
    }
}
