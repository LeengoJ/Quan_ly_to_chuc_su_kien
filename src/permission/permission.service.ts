import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PermissionDocument } from './permission.schema';
import { CreatePermission } from 'src/common/dtos/permission-dto/permisson-dto';

@Injectable()
export class PermissionService {
    constructor(@InjectModel('Report') private readonly PermissionModel: Model<PermissionDocument>) { }

    async add(planer: CreatePermission) {
        const newO = new this.PermissionModel(planer)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async get(): Promise<PermissionDocument[]> {
        return this.PermissionModel.find()
    }
    //
    async getById(id: string): Promise<PermissionDocument | null> {
        return this.PermissionModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.PermissionModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<CreatePermission>) {
        return await this.PermissionModel.findByIdAndUpdate(id, data, { new: true })
    }
}
