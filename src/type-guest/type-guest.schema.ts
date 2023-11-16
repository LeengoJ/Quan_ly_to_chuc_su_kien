import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

export type TypeGuestDocument = TypeGuest & Document;

@Schema()
export class TypeGuest {
    @Prop({ required: true })
    nameTypeGuest!: string;
    // Events
    @Prop({ required: false, type: [Types.ObjectId], ref: "Event" })
    events!: string[];
}
export const TypeGuestSchema = SchemaFactory.createForClass(TypeGuest); 