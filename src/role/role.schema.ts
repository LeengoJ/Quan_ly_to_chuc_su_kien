import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { Document, Types } from 'mongoose';
import { Permission } from 'src/permission/permission.schema';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop()
  name!: string;

  @Prop()
  description!: string;

  @Prop()
  isActive!: boolean;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: Permission.name })
  permissions!: Permission[];

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

}
export const RoleSchema = SchemaFactory.createForClass(Role);