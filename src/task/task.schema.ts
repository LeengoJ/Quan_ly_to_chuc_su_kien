import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({ required: true })
    id!: string;
    @Prop({ required: true })
    task!: string
    @Prop({ required: true, default: true })
    status!: boolean
    @Prop({ required: true })
    relationship!: string[]
}
export const TaskSchema = SchemaFactory.createForClass(Task);