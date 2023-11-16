import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PhongNguDocument } from './phong-ngu.schema';
import { PhongNguDto } from 'src/common/dtos/phong-ngu-dto/create-phongngu-dto';
import { LocationService } from 'src/location/location.service';
@Injectable()
export class PhongNguService {
    constructor(@InjectModel('PhongNgu') private readonly phongNguModel: Model<PhongNguDocument>,
        // private locationService: LocationService
    ) { }

    findAll(): Promise<PhongNguDocument[]> {
        return this.phongNguModel.find()
    }
    async findPhongNguByIdLocation(IdLocation: string): Promise<PhongNguDocument[] | null> {
        let Room: PhongNguDocument[] = []
        Room = await this.phongNguModel.find({ LocationId: IdLocation });
        return Room
    }
    async countPhongNguByIdLocation(IdLocation: string): Promise<number | null> {
        let Room: PhongNguDocument[] = []
        Room = await this.phongNguModel.find({ LocationId: IdLocation });
        return Room.length
    }
    async findByLocationId(LocationId: string): Promise<PhongNguDocument[] | null> {
        return await this.phongNguModel.find({ LocationId: LocationId })
    }

    async layKichCoCuaPhongNgu(id: string): Promise<number | null> {
        const phong = await this.phongNguModel.findById(id)
        if (phong)
            return phong.soGiuong
        else
            return null
    }
    // Sức chứa khách qua đêm của 
    async laySucChuaCuaNoiToChucSuKien(LocationId: string) {
        const phongNgu = await this.phongNguModel.find({ LocationId })
        let count = 0;
        for (let i = 0; i < phongNgu.length; i++) {
            if (phongNgu[i].LoaiPhong == "big")
                count = count + phongNgu[i].soGiuong * 2
            else if (phongNgu[i].LoaiPhong == "small")
                count = count + phongNgu[i].soGiuong
        }
        return count
    }
    //Thêm phòng ngủ
    async addPhongNGu(phongNgu: PhongNguDto) {
        const newPhongNgu = new this.phongNguModel();
        newPhongNgu.tenPhong = phongNgu.tenPhong;
        newPhongNgu.soGiuong = phongNgu.soGiuong;
        newPhongNgu.LoaiPhong = phongNgu.LoaiPhong;
        // let location = await this.locationService.findById(phongNgu.LocationId)
        // if (location) {
        newPhongNgu.LocationId = phongNgu.LocationId
        newPhongNgu.save()
        // } else
        //     return "error"
    }
    async getById(id: string): Promise<PhongNguDocument | null> {
        return this.phongNguModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.phongNguModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<PhongNguDto>) {
        return await this.phongNguModel.findByIdAndUpdate(id, data, { new: true })
    }
}


