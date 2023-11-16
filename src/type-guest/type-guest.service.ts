import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TypeGuestDocument } from './type-guest.schema';
import { CreateTypeGuest } from 'src/common/dtos/type-guest/create-type-guest';

@Injectable()
export class TypeGuestService {
    constructor(@InjectModel('TypeGuest') private readonly typeGuestModel: Model<TypeGuestDocument>) { }

    async add(planer: CreateTypeGuest) {
        const newO = new this.typeGuestModel(planer)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async get(): Promise<TypeGuestDocument[]> {
        return this.typeGuestModel.find()
    }
    //
    async getById(id: string): Promise<TypeGuestDocument | null> {
        return this.typeGuestModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.typeGuestModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<CreateTypeGuest>) {
        return await this.typeGuestModel.findByIdAndUpdate(id, data, { new: true })
    }
}
