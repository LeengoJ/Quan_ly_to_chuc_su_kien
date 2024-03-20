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
import { PhongNguService } from './phong-ngu.service';
import { PhongNguDto } from 'src/common/dtos/phong-ngu-dto/create-phongngu-dto';
export declare class PhongNguController {
    private readonly phongNguService;
    constructor(phongNguService: PhongNguService);
    create(PhongNguData: PhongNguDto): Promise<void>;
    findAll(): Promise<import("./phong-ngu.schema").PhongNguDocument[]>;
    findOne(id: string): Promise<import("./phong-ngu.schema").PhongNguDocument | null>;
    delete(id: string): Promise<void>;
    update(id: string, PhongNguData: Partial<PhongNguDto>): Promise<(import("mongoose").Document<unknown, {}, import("./phong-ngu.schema").PhongNguDocument> & import("./phong-ngu.schema").PhongNgu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
