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
import { LocationDocument } from './location.schema';
import { Model } from 'mongoose';
import { PhongHoiNghiService } from 'src/phong-hoi-nghi/phong-hoi-nghi.service';
import { PhongHoiNghiDocument } from 'src/phong-hoi-nghi/phong-hoi-nghi.schema';
import { LichService } from 'src/lich/lich.service';
import { PhongNguService } from 'src/phong-ngu/phong-ngu.service';
import { createLocationDto } from 'src/common/dtos/location-dto/create-location-dto';
import { reviewLocationDto } from 'src/common/dtos/location-dto/review-location-dto';
export declare class LocationService {
    private readonly locationModel;
    private phongHoiNghiService;
    private lichService;
    private phongNgu;
    constructor(locationModel: Model<LocationDocument>, phongHoiNghiService: PhongHoiNghiService, lichService: LichService, phongNgu: PhongNguService);
    getAll(): Promise<void>;
    createNewLocation(location: createLocationDto): Promise<import("mongoose").Document<unknown, {}, LocationDocument> & import("./location.schema").Location & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findById(locationId: string): Promise<any>;
    deleteLocation(LocationId: string): void;
    updateInfoLocation(LocationId: string, dataLocation: Partial<LocationDocument>): import("mongoose").Query<(import("mongoose").Document<unknown, {}, LocationDocument> & import("./location.schema").Location & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null, import("mongoose").Document<unknown, {}, LocationDocument> & import("./location.schema").Location & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, LocationDocument, "findOneAndUpdate">;
    checkLichDatPhongHoiNghiTheoNgayGioVaDiaDiemToChuc(date: Date, LocationId: string, timeStart: Date, timeDone: Date): Promise<boolean>;
    checkLichDatPhongHoiNghiTheoNgayVaDiaDiemToChuc(LocationId: string, dateStart: Date, dateDone: Date): Promise<boolean>;
    danhSachPhongHoiNghiLoaiLonConTrongCuaDiaDiemNay(LocationId: string): Promise<PhongHoiNghiDocument[] | null>;
    danhSachPhongHoiNghiLoaiVuaConTrongCuaDiaDiemNay(LocationId: string): Promise<PhongHoiNghiDocument[] | null>;
    danhSachPhongHoiNghiLoaiNhoConTrongCuaDiaDiemNay(LocationId: string): Promise<PhongHoiNghiDocument[] | null>;
    reviewLocation_region_Nation_provinceCity(region: string, Nation: string, provinceCity: string): Promise<LocationDocument[] | null>;
    reviewLocation_peopleInEvent_peopleStayOverNight(locations: LocationDocument[], peopleInEvent: number, peopleStayOverNight: number): Promise<LocationDocument[]>;
    getListPhongHoiNghi(LocationId: string): Promise<PhongHoiNghiDocument[] | null>;
    checkPhongHoiNghi(LocationId: string, soNguoi: number): Promise<boolean>;
    checkPhongNgu(LocationId: string, soNguoi: number): Promise<boolean>;
    reviewLocation(revL: reviewLocationDto): Promise<LocationDocument[] | null>;
}
