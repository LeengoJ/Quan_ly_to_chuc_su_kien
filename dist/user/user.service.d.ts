/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { UserDetails } from './user-details.interface';
import { UserDocument } from './user.schema';
import { RoleService } from 'src/role/role.service';
import { CreateUserDto } from 'src/common/dtos/user-dto/create-user-dto';
export declare class UserService {
    private readonly userModel;
    private readonly roleService;
    constructor(userModel: Model<UserDocument>, roleService: RoleService);
    _getUserDetails(user: UserDocument): UserDetails;
    findByEmail(email: string): Promise<UserDocument | null>;
    findById(id: string): Promise<UserDetails | null>;
    findUserByToken(token: string): Promise<UserDocument | null>;
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, UserDocument> & import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<UserDocument>;
    update(id: string, updatedUserData: Partial<UserDocument>): Promise<UserDocument>;
    getHashPassword: (password: string) => string;
    register(User: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, UserDocument> & import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    isValidPassword(password: string, hash: string): boolean;
    updateRefresh_Token: (id: any, refreshToken: any) => Promise<(import("mongoose").Document<unknown, {}, UserDocument> & import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, UserDocument> & import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
