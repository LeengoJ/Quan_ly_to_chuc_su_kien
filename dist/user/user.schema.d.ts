import mongoose, { Document } from 'mongoose';
export type UserDocument = User & Document;
export declare class User {
    password: string;
    email: string;
    name: string;
    phoneNumber: string;
    role: mongoose.Schema.Types.ObjectId;
    refreshToken: string;
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
    permissions: never[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, User> & User & {
    _id: mongoose.Types.ObjectId;
}>;
