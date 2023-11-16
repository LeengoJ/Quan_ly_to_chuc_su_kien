import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

export type PhongNguDocument = PhongNgu & Document;

@Schema()
export class PhongNgu {
    @Prop({})
    soGiuong!: number
    @Prop({})
    tenPhong!: string
    @Prop({ type: Types.ObjectId, ref: 'Location' })
    LocationId!: string
    //có hai loai phong la phong lon va phong nho neu la phong lon :"big" nhỏ: "small"
    @Prop({})
    LoaiPhong!: string
}
export const PhongNguSchema = SchemaFactory.createForClass(PhongNgu);