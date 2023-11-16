
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Date, Document } from 'mongoose';
import { type } from 'os';
export type OganizationDocument = Oganization & Document;
const allowedOrganization = [
    'Association',
    'Corporate',
    'Education',
    'Government',
    'Military',
    'Non - profit',
    'Other',
    'Religious',
    'Social'
];
@Schema()
export class Oganization {
    // Client organization name
    @Prop({ required: true })
    name!: string;
    // Required
    @Prop({ required: true })
    description!: string;
    // Client organization
    @Prop({
        required: true,
        validate: {
            validator: function (value: string[]) {
                return value.every((client) => allowedOrganization)
            },
            message: 'invalid'
        }
    })
    client!: string[];
    // Industry
}
export const OganizationSchema = SchemaFactory.createForClass(Oganization);