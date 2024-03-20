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
import { CustomerRequest } from 'src/common/dtos/customer-request';
import { LocationService } from 'src/location/location.service';
import { CusReqDocument } from './customer-request.schema';
export declare class CustomerRequestService {
    private readonly CusReqModel;
    private locationService;
    constructor(CusReqModel: Model<CusReqDocument>, locationService: LocationService);
    getLocationByCustomerRequest(req: CustomerRequest): Promise<import("../location/location.schema").LocationDocument[] | null>;
    add(planer: CustomerRequest): Promise<any>;
    get(): Promise<CusReqDocument[]>;
    getById(id: string): Promise<CusReqDocument | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, CusReqDocument> & import("./customer-request.schema").CusReq & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<CustomerRequest>): Promise<(import("mongoose").Document<unknown, {}, CusReqDocument> & import("./customer-request.schema").CusReq & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
