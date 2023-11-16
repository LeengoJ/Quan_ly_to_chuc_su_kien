import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Date, Document } from 'mongoose';
import { type } from 'os';
export type ipBlockDocument = ipBlock & Document;
@Schema()
export class ipBlock {
    @Prop({ required: true })
    ip!: string
}
export const ipBlockSchema = SchemaFactory.createForClass(ipBlock
);