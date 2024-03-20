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
import { PhongNguDocument } from './phong-ngu.schema';
import { PhongNguDto } from 'src/common/dtos/phong-ngu-dto/create-phongngu-dto';
export declare class PhongNguService {
    private readonly phongNguModel;
    constructor(phongNguModel: Model<PhongNguDocument>);
    findAll(): Promise<PhongNguDocument[]>;
    findPhongNguByIdLocation(IdLocation: string): Promise<PhongNguDocument[] | null>;
    countPhongNguByIdLocation(IdLocation: string): Promise<number | null>;
    findByLocationId(LocationId: string): Promise<PhongNguDocument[] | null>;
    layKichCoCuaPhongNgu(id: string): Promise<number | null>;
    laySucChuaCuaNoiToChucSuKien(LocationId: string): Promise<number>;
    addPhongNGu(phongNgu: PhongNguDto): Promise<void>;
    getById(id: string): Promise<PhongNguDocument | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, PhongNguDocument> & import("./phong-ngu.schema").PhongNgu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<PhongNguDto>): Promise<(import("mongoose").Document<unknown, {}, PhongNguDocument> & import("./phong-ngu.schema").PhongNgu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
