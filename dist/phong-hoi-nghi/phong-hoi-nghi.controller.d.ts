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
import { PhongHoiNghiService } from './phong-hoi-nghi.service';
import { PhongNguDto } from 'src/common/dtos/phong-ngu-dto/create-phongngu-dto';
import { PhongHoiNghiDTO } from 'src/common/dtos/phong-hoi-nghi-dto/phong-hoi-nghi-dto';
export declare class PhongHoiNghiController {
    private readonly phongHoiNghiService;
    constructor(phongHoiNghiService: PhongHoiNghiService);
    create(PhongHoiNghiData: PhongHoiNghiDTO): Promise<any>;
    findAll(): Promise<import("./phong-hoi-nghi.schema").PhongHoiNghiDocument[]>;
    findOne(id: string): Promise<import("./phong-hoi-nghi.schema").PhongHoiNghiDocument | null>;
    delete(id: string): Promise<void>;
    update(id: string, PhongNguData: Partial<PhongNguDto>): Promise<(import("mongoose").Document<unknown, {}, import("./phong-hoi-nghi.schema").PhongHoiNghiDocument> & import("./phong-hoi-nghi.schema").PhongHoiNghi & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
