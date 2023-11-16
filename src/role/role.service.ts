import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRole } from 'src/common/dtos/role-dto/role-dto';
import { RoleDocument } from './role.schema';

@Injectable()
export class RoleService {
    constructor(@InjectModel('Role') private readonly roleModel: Model<RoleDocument>) { }

    async add(role: CreateRole) {
        const newO = new this.roleModel(role)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async get(): Promise<RoleDocument[]> {
        return this.roleModel.find()
    }
    //
    async getById(id: string): Promise<RoleDocument | null> {
        return this.roleModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.roleModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<CreateRole>) {
        return await this.roleModel.findByIdAndUpdate(id, data, { new: true })
    }
}
