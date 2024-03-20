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
import { PlanerDocument } from './planer.schema';
import { CreatePlaner } from 'src/common/dtos/planner-dto/create-planer-dto';
export declare class PlanerService {
    private readonly PlanerModel;
    constructor(PlanerModel: Model<PlanerDocument>);
    addPlaner(planer: CreatePlaner): Promise<any>;
    getPlaner(): Promise<PlanerDocument[]>;
    getPlanerById(id: string): Promise<PlanerDocument | null>;
    deletePlaner(id: string): Promise<(import("mongoose").Document<unknown, {}, PlanerDocument> & import("./planer.schema").Planer & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    updateIp(id: string, data: Partial<CreatePlaner>): Promise<(import("mongoose").Document<unknown, {}, PlanerDocument> & import("./planer.schema").Planer & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
