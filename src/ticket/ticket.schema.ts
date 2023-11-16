import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
    //khách mời
    @Prop({ required: true, type: Types.ObjectId, ref: "Guest" })
    guestId!: string;
    //sự kiện
    @Prop({ required: true, type: Types.ObjectId, ref: "Event" })
    eventId!: string;
    //số lượng người tối đa của vé
    @Prop({ required: false, default: 0 })
    quantity?: number;
    //tổng số tiền phải trả cho ticket này
    @Prop({ required: false, default: 0 })
    totalPrice?: number;
}
export const TicketSchema = SchemaFactory.createForClass(Ticket);