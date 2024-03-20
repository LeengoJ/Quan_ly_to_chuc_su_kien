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
import { TypeGuestService } from './type-guest.service';
import { CreateTypeGuest } from 'src/common/dtos/type-guest/create-type-guest';
export declare class TypeGuestController {
    private readonly typeGuestService;
    constructor(typeGuestService: TypeGuestService);
    create(typeEventData: CreateTypeGuest): Promise<any>;
    findAll(): Promise<import("./type-guest.schema").TypeGuestDocument[]>;
    findOne(id: string): Promise<import("./type-guest.schema").TypeGuestDocument | null>;
    delete(id: string): Promise<void>;
    update(id: string, typeEventData: Partial<CreateTypeGuest>): Promise<(import("mongoose").Document<unknown, {}, import("./type-guest.schema").TypeGuestDocument> & import("./type-guest.schema").TypeGuest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
