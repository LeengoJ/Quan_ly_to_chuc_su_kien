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
import { CustomerRequestService } from './customer-request.service';
import { CustomerRequest } from 'src/common/dtos/customer-request';
export declare class CustomerRequestController {
    private readonly cusReqService;
    constructor(cusReqService: CustomerRequestService);
    create(reportData: CustomerRequest): Promise<any>;
    findAll(): Promise<import("./customer-request.schema").CusReqDocument[]>;
    findOne(id: string): Promise<import("./customer-request.schema").CusReqDocument | null>;
    delete(id: string): Promise<void>;
    update(id: string, reportData: Partial<CustomerRequest>): Promise<(import("mongoose").Document<unknown, {}, import("./customer-request.schema").CusReqDocument> & import("./customer-request.schema").CusReq & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
