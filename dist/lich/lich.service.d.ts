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
import { LichDocument } from './lich.schema';
import { Model } from 'mongoose';
import { PhongHoiNghi } from 'src/phong-hoi-nghi/phong-hoi-nghi.schema';
import { PhongHoiNghiService } from 'src/phong-hoi-nghi/phong-hoi-nghi.service';
import { CreateLichDto } from 'src/common/dtos/lich-dto/create-lich-dto';
export declare class LichService {
    private readonly lichModel;
    private phongHoiNghiService;
    constructor(lichModel: Model<LichDocument>, phongHoiNghiService: PhongHoiNghiService);
    add(role: CreateLichDto): Promise<any>;
    get(): Promise<LichDocument[]>;
    getById(id: string): Promise<LichDocument | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, LichDocument> & import("./lich.schema").Lich & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<CreateLichDto>): Promise<(import("mongoose").Document<unknown, {}, LichDocument> & import("./lich.schema").Lich & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    getbyName(name: string): Promise<LichDocument | null>;
    datLichChoPhongHoiNghi(PhongHoiNghiId: string, date: Date, startTime: Date, endTime: Date, EventId: string): Promise<import("mongoose").Document<unknown, {}, LichDocument> & import("./lich.schema").Lich & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    datLichPhongNgu(PhongNguId: string, date: Date, startTime: Date, endTime: Date): Promise<import("mongoose").Document<unknown, {}, LichDocument> & import("./lich.schema").Lich & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    isAppointmentAvailableSleep(PhongNguId: string, date: Date, startTime: Date, endTime: Date): Promise<boolean>;
    isAppointmentAvailableMeeting(PhongHoiNghiId: string, date: Date, startTime: Date, endTime: Date): Promise<boolean>;
    isAppointmentAvailableMeetingLongDay(PhongHoiNghiId: string, startDate: Date, endDate: Date): Promise<boolean>;
    countPhongHoiNghiTrongTrongThoiGianNhatDinh(date: Date): Promise<PhongHoiNghi[]>;
}
