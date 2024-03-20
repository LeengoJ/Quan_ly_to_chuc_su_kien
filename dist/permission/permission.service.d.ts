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
import { PermissionDocument } from './permission.schema';
import { CreatePermission } from 'src/common/dtos/permission-dto/permisson-dto';
export declare class PermissionService {
    private readonly PermissionModel;
    constructor(PermissionModel: Model<PermissionDocument>);
    add(planer: CreatePermission): Promise<any>;
    get(): Promise<PermissionDocument[]>;
    getById(id: string): Promise<PermissionDocument | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, PermissionDocument> & import("./permission.schema").Permission & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<CreatePermission>): Promise<(import("mongoose").Document<unknown, {}, PermissionDocument> & import("./permission.schema").Permission & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
