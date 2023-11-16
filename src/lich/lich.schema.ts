import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

export type LichDocument = Lich & Document;

@Schema()
export class Lich {
    @Prop({})
    time!: Date
    @Prop({})
    timeStart!: Date
    @Prop({})
    timeDone!: Date
    @Prop({ type: Types.ObjectId, ref: "PhongHoiNghi" })
    PhongHoiNghiId!: string[]
    @Prop({ type: Types.ObjectId, ref: "PhongNgu" })
    PhongNguId!: string[]
    @Prop({ type: Types.ObjectId, ref: "Event", unique: true })
    EventId!: string
}
export const LichSchema = SchemaFactory.createForClass(Lich);