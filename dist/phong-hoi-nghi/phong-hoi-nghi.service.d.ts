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
import { PhongHoiNghiDocument } from './phong-hoi-nghi.schema';
import { PhongHoiNghiDTO } from 'src/common/dtos/phong-hoi-nghi-dto/phong-hoi-nghi-dto';
export declare class PhongHoiNghiService {
    private readonly phonghoinghiModel;
    constructor(phonghoinghiModel: Model<PhongHoiNghiDocument>);
    findAll(): Promise<PhongHoiNghiDocument[]>;
    findPhongHoiNghiByIdLocation(IdLocation: string): Promise<PhongHoiNghiDocument[] | null>;
    countPhongHoiNghiByIdLocation(IdLocation: string): Promise<number | null>;
    findByLocationId(LocationId: string): Promise<PhongHoiNghiDocument[] | null>;
    layLoaiPhongHoiNghiById(id: String): Promise<string | null>;
    layKichCoCuaPhongHoiNghi(id: string): Promise<number | null>;
    add(planer: PhongHoiNghiDTO): Promise<any>;
    get(): Promise<PhongHoiNghiDocument[]>;
    getById(id: string): Promise<PhongHoiNghiDocument | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, PhongHoiNghiDocument> & import("./phong-hoi-nghi.schema").PhongHoiNghi & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<PhongHoiNghiDTO>): Promise<(import("mongoose").Document<unknown, {}, PhongHoiNghiDocument> & import("./phong-hoi-nghi.schema").PhongHoiNghi & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
