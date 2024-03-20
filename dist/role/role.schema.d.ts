import mongoose, { Document, Types } from 'mongoose';
import { Permission } from 'src/permission/permission.schema';
export type RoleDocument = Role & Document;
export declare class Role {
    name: string;
    description: string;
    isActive: boolean;
    permissions: Permission[];
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    updatedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    deletedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    createAt: Date;
    uploadAt: Date;
    deletedAt: Date;
    isDeleted: boolean;
}
export declare const RoleSchema: mongoose.Schema<Role, mongoose.Model<Role, any, any, any, mongoose.Document<unknown, any, Role> & Role & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Role, mongoose.Document<unknown, {}, Role> & Role & {
    _id: Types.ObjectId;
}>;
