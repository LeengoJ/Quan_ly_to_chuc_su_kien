import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PhongHoiNghiDocument } from './phong-hoi-nghi.schema';
import { PhongHoiNghiDTO } from 'src/common/dtos/phong-hoi-nghi-dto/phong-hoi-nghi-dto';

@Injectable()
export class PhongHoiNghiService {
    constructor(@InjectModel('PhongHoiNghi') private readonly phonghoinghiModel: Model<PhongHoiNghiDocument>) { }

    findAll(): Promise<PhongHoiNghiDocument[]> {
        return this.phonghoinghiModel.find()
    }
    async findPhongHoiNghiByIdLocation(IdLocation: string): Promise<PhongHoiNghiDocument[] | null> {
        let Room: PhongHoiNghiDocument[] = []
        Room = await this.phonghoinghiModel.find({ LocationId: IdLocation });
        return Room
    }
    async countPhongHoiNghiByIdLocation(IdLocation: string): Promise<number | null> {
        let Room: PhongHoiNghiDocument[] = []
        Room = await this.phonghoinghiModel.find({ LocationId: IdLocation });
        return Room.length
    }
    async findByLocationId(LocationId: string): Promise<PhongHoiNghiDocument[] | null> {
        return await this.phonghoinghiModel.find({ LocationId: LocationId })
    }
    async layLoaiPhongHoiNghiById(id: String): Promise<string | null> {
        const phong = await this.phonghoinghiModel.findById(id)
        if (phong)
            return phong.statusRoom
        else
            return "null"
    }
    async layKichCoCuaPhongHoiNghi(id: string): Promise<number | null> {
        const phong = await this.phonghoinghiModel.findById(id)
        if (phong)
            return phong.soGheNgoi
        else
            return null
    }
    async add(planer: PhongHoiNghiDTO) {
        const newO = new this.phonghoinghiModel(planer)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async get(): Promise<PhongHoiNghiDocument[]> {
        return this.phonghoinghiModel.find()
    }
    //
    async getById(id: string): Promise<PhongHoiNghiDocument | null> {
        return this.phonghoinghiModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.phonghoinghiModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<PhongHoiNghiDTO>) {
        return await this.phonghoinghiModel.findByIdAndUpdate(id, data, { new: true })
    }
}
