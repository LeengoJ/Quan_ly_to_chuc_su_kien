import { Injectable } from '@nestjs/common';
import { TypeEventDocument } from './type-event.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTypeEvent } from 'src/common/dtos/type-event-dto/create-type-event-dto';

@Injectable()
export class TypeEventService {
    constructor(@InjectModel('TypeEvent') private readonly typeEventModel: Model<TypeEventDocument>) { }

    async add(planer: CreateTypeEvent) {
        const newO = new this.typeEventModel(planer)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async get(): Promise<TypeEventDocument[]> {
        return this.typeEventModel.find()
    }
    //
    async getById(id: string): Promise<TypeEventDocument | null> {
        return this.typeEventModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.typeEventModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<CreateTypeEvent>) {
        return await this.typeEventModel.findByIdAndUpdate(id, data, { new: true })
    }
}
