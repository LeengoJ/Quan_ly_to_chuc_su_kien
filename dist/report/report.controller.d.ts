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
import { ReportService } from './report.service';
import { CreateReport } from 'src/common/dtos/report-dto/create-report-dto';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    create(reportData: CreateReport): Promise<any>;
    findAll(): Promise<import("./report.schema").ReportDocument[]>;
    findOne(id: string): Promise<import("./report.schema").ReportDocument | null>;
    delete(id: string): Promise<void>;
    update(id: string, reportData: Partial<CreateReport>): Promise<(import("mongoose").Document<unknown, {}, import("./report.schema").ReportDocument> & import("./report.schema").Report & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
