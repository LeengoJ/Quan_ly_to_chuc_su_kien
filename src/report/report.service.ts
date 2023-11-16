import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportDocument } from './report.schema';
import { CreateReport } from 'src/common/dtos/report-dto/create-report-dto';

@Injectable()
export class ReportService {
    constructor(@InjectModel('Report') private readonly reportModel: Model<ReportDocument>) { }

    async add(planer: CreateReport) {
        const newO = new this.reportModel(planer)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async get(): Promise<ReportDocument[]> {
        return this.reportModel.find()
    }
    //
    async getById(id: string): Promise<ReportDocument | null> {
        return this.reportModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.reportModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<CreateReport>) {
        return await this.reportModel.findByIdAndUpdate(id, data, { new: true })
    }
}
