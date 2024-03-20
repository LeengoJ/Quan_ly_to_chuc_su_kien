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
import { ipBlockDocument } from './ip-block.schema';
import { Model } from 'mongoose';
import { UpdateIpBlockDto } from 'src/common/dtos/ipblock-dto/update-ip-block-dto';
export declare class IpBlockService {
    private readonly IPModel;
    constructor(IPModel: Model<ipBlockDocument>);
    blockIp(ip: string): Promise<any>;
    unBlockIp(ip: string): Promise<import("mongodb").DeleteResult>;
    checkIp(ip: string): Promise<boolean>;
    getListIpBlock(): Promise<(import("mongoose").Document<unknown, {}, ipBlockDocument> & import("./ip-block.schema").ipBlock & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateIp(id: string, data: Partial<UpdateIpBlockDto>): Promise<(import("mongoose").Document<unknown, {}, ipBlockDocument> & import("./ip-block.schema").ipBlock & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
