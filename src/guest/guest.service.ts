import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GuestDocument } from './guest.schema';
import { CreateGuest } from 'src/common/dtos/guest-dto/create-guest-dto';

@Injectable()
export class GuestService {
    constructor(@InjectModel('Guest') private readonly reportModel: Model<GuestDocument>) { }

    async add(planer: CreateGuest) {
        const newO = new this.reportModel(planer)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async get(): Promise<GuestDocument[]> {
        return this.reportModel.find()
    }
    //
    async getById(id: string): Promise<GuestDocument | null> {
        return this.reportModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.reportModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<CreateGuest>) {
        return await this.reportModel.findByIdAndUpdate(id, data, { new: true })
    }
}
