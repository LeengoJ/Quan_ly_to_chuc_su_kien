import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { OganizationDocument } from './oganization.schema';
import { CreateOganization } from 'src/common/dtos/create-organization-dto';

@Injectable()
export class OrganizationService {
    constructor(@InjectModel('Organization') private readonly OganizationModel: Model<OganizationDocument>,
    ) { }
    //Thêm tổ chức
    async addOrganization(Or: CreateOganization) {
        const newO = new this.OganizationModel(Or)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async getOrganizations(): Promise<OganizationDocument[]> {
        return this.OganizationModel.find()
    }
    //
    async getOrganizationById(id: string): Promise<OganizationDocument | null> {
        return this.OganizationModel.findById(id)
    }
    //Xóa
    async deleteOrganization(id: string) {
        return await this.OganizationModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async updateIp(id: string, data: Partial<CreateOganization>) {
        return await this.OganizationModel.findByIdAndUpdate(id, data, { new: true })
    }
}
