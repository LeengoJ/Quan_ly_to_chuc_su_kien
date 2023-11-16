import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

export type PlanerDocument = Planer & Document;

@Schema()
export class Planer {
    // User ID
    @Prop({ required: true, type: Types.ObjectId, ref: "User" })
    userId!: string;
    // First name
    @Prop({ required: true })
    firstName!: string;
    // Last name
    @Prop({ required: true })
    lastName!: string;
    //     Email gợi ý sdt và email ở front-end
    @Prop({ required: true })
    email!: string;
    //     Phone
    @Prop({ required: false })
    phone!: string;
    //     City
    @Prop({ required: true })
    city!: string;
    // Country/Region
    @Prop({ required: true })
    country!: string;
    // Organization
    @Prop({ required: true, type: Types.ObjectId, ref: "Organization" })
    organizationId!: string;
    // Commission rate
    @Prop({ required: true })
    commissionRate!: number;
    // Events
    @Prop({ required: false, type: [Types.ObjectId], ref: "Event" })
    events!: string[];
}
export const PlanerSchema = SchemaFactory.createForClass(Planer);