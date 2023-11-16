import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

export type TypeEventDocument = TypeEvent & Document;

@Schema()
export class TypeEvent {
    @Prop({ required: true })
    nameTypeEvent!: string;
    // Events
    @Prop({ required: false, type: [Types.ObjectId], ref: "Event" })
    events!: string[];
}
export const TypeEventSchema = SchemaFactory.createForClass(TypeEvent);