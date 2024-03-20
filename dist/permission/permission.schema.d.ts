import mongoose, { Document, Types } from 'mongoose';
export type PermissionDocument = Permission & Document;
export declare class Permission {
    name: string;
    apiPath: string;
    method: string;
    module: string;
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
export declare const PermissionSchema: mongoose.Schema<Permission, mongoose.Model<Permission, any, any, any, mongoose.Document<unknown, any, Permission> & Permission & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Permission, mongoose.Document<unknown, {}, Permission> & Permission & {
    _id: Types.ObjectId;
}>;
