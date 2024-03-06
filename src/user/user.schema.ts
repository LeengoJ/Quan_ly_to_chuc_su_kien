import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { Document } from 'mongoose';
import { Role } from 'src/role/role.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true, })
    password!: string;
    @Prop({ required: true })
    email!: string;
    @Prop({ required: true })
    name!: string;
    @Prop({ required: false, length: 10 })
    phoneNumber!: string;
    @Prop({ default: "656afb7046d3d144194feecb", type: mongoose.Schema.Types.ObjectId, ref: Role.name })
    role!: mongoose.Schema.Types.ObjectId
    @Prop()
    refreshToken!: string;
    @Prop({ type: Object })
    createdBy!: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }

    @Prop({ type: Object })
    updatedBy!: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }

    @Prop({ type: Object })
    deletedBy!: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }

    @Prop()
    createAt!: Date;

    @Prop()
    uploadAt!: Date;

    @Prop()
    deletedAt!: Date;

    @Prop()
    isDeleted!: boolean;
    @Prop()
    permissions!: never[];

}
export const UserSchema = SchemaFactory.createForClass(User);