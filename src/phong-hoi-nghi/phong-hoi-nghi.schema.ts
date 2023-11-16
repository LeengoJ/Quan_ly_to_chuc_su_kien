import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

export type PhongHoiNghiDocument = PhongHoiNghi & Document;

// Phòng họp nhỏ: Sức chứa từ 10 đến 20 người, diện tích tối thiểu là 20m2.
// Phòng họp vừa: Sức chứa từ 20 đến 50 người, diện tích tối thiểu là 40m2.
// Phòng họp lớn: Sức chứa từ 50 đến 200 người, diện tích tối thiểu là 100m2.
@Schema()
export class PhongHoiNghi {
    @Prop({})
    soGheNgoi!: number
    @Prop({})
    tenPhong!: string
    @Prop({ type: Types.ObjectId, ref: 'Location' })
    LocationId!: string
    //Loai phong ngoai troi hay trong nha
    @Prop()
    statusRoom!: string
}
export const PhongHoiNghiSchema = SchemaFactory.createForClass(PhongHoiNghi);