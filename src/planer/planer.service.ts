import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlanerDocument } from './planer.schema';
import { CreatePlaner } from 'src/common/dtos/planner-dto/create-planer-dto';

@Injectable()
export class PlanerService {
    constructor(@InjectModel('Planer') private readonly PlanerModel: Model<PlanerDocument>,
    ) { }
    //Thêm tổ chức
    async addPlaner(planer: CreatePlaner) {
        const newO = new this.PlanerModel(planer)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async getPlaner(): Promise<PlanerDocument[]> {
        return this.PlanerModel.find()
    }
    //
    async getPlanerById(id: string): Promise<PlanerDocument | null> {
        return this.PlanerModel.findById(id)
    }
    //Xóa
    async deletePlaner(id: string) {
        return await this.PlanerModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async updateIp(id: string, data: Partial<CreatePlaner>) {
        return await this.PlanerModel.findByIdAndUpdate(id, data, { new: true })
    }
}
