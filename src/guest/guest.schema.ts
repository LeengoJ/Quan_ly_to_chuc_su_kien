import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

export type GuestDocument = Guest & Document;

@Schema()
export class Guest {
    @Prop({ require: true })
    name!: string
    @Prop({ required: true })
    email!: string
    @Prop({ required: true })
    phoneNumber!: string
    @Prop({ required: true, type: Types.ObjectId, ref: "TypeGuest" })
    TypeGuestId!: string
}
export const GuestSchema = SchemaFactory.createForClass(Guest);