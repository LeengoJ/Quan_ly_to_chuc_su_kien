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
import { TypeEventDocument } from './type-event.schema';
import { Model } from 'mongoose';
import { CreateTypeEvent } from 'src/common/dtos/type-event-dto/create-type-event-dto';
export declare class TypeEventService {
    private readonly typeEventModel;
    constructor(typeEventModel: Model<TypeEventDocument>);
    add(planer: CreateTypeEvent): Promise<any>;
    get(): Promise<TypeEventDocument[]>;
    getById(id: string): Promise<TypeEventDocument | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, TypeEventDocument> & import("./type-event.schema").TypeEvent & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<CreateTypeEvent>): Promise<(import("mongoose").Document<unknown, {}, TypeEventDocument> & import("./type-event.schema").TypeEvent & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
