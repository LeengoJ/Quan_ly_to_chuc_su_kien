import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TicketDocument } from './ticket.schema';
import { CreateTicket } from 'src/common/dtos/ticket-dto/create-ticket-dto';
import { Model } from 'mongoose';

@Injectable()
export class TicketService {
    constructor(@InjectModel('Ticket') private readonly ticketModel: Model<TicketDocument>) { }

    async add(planer: CreateTicket) {
        const newO = new this.ticketModel(planer)
        return (await newO.save()).id
    }
    //Lấy danh sách các tổ chức đã tham gia
    async get(): Promise<TicketDocument[]> {
        return this.ticketModel.find()
    }
    //
    async getById(id: string): Promise<TicketDocument | null> {
        return this.ticketModel.findById(id)
    }
    //Xóa
    async delete(id: string) {
        return await this.ticketModel.findByIdAndDelete(id)
    }
    // Cập nhật
    async update(id: string, data: Partial<CreateTicket>) {
        return await this.ticketModel.findByIdAndUpdate(id, data, { new: true })
    }
}
