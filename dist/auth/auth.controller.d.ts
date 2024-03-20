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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { RoleService } from 'src/role/role.service';
import { IUser } from 'src/common/interface/user.interface';
import { UserLoginDto } from 'src/common/dtos/login-dto/login.dto';
import { CreateUserDto } from 'src/common/dtos/user-dto/create-user-dto';
export declare class AuthController {
    private authService;
    private roleService;
    constructor(authService: AuthService, roleService: RoleService);
    handleLogin(User: UserLoginDto, response: Response): Promise<{
        access_token: string;
        user: import("../user/user.schema").UserDocument;
    } | null>;
    handleRegister(registerUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../user/user.schema").UserDocument> & import("../user/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAccountfromHeader(user: IUser): Promise<{
        user: IUser;
    }>;
    handleRefreshToken(request: Request, response: Response): Promise<{
        access_token: string;
        user: {
            id: any;
            name: string;
            email: string;
            role: import("mongoose").Schema.Types.ObjectId;
            permissions: import("../permission/permission.schema").Permission[];
        };
    } | undefined>;
    handleLogout(user: IUser, response: Response): Promise<string>;
}
