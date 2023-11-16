import { Injectable } from '@nestjs/common';
import { ipBlockDocument } from './ip-block.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateIpBlockDto } from 'src/common/dtos/ipblock-dto/update-ip-block-dto';

@Injectable()
export class IpBlockService {
    constructor(@InjectModel('ipBlock') private readonly IPModel: Model<ipBlockDocument>,
    ) { }
    async blockIp(ip: string) {
        const ipMoi = new this.IPModel({ ip })
        return (await ipMoi.save()).id
    }
    async unBlockIp(ip: string) {
        return await this.IPModel.deleteOne({ ip })
    }
    async checkIp(ip: string) {
        let ip_check_bool = await this.IPModel.find({ ip: ip })
        if (ip_check_bool)
            return true
        return false
    }
    async getListIpBlock() {
        return await this.IPModel.find({})
    }
    async updateIp(id: string, data: Partial<UpdateIpBlockDto>) {
        return await this.IPModel.findByIdAndUpdate(id, data, { new: true })
    }
}
