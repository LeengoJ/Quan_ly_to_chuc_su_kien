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
import { TicketDocument } from './ticket.schema';
import { CreateTicket } from 'src/common/dtos/ticket-dto/create-ticket-dto';
import { Model } from 'mongoose';
export declare class TicketService {
    private readonly ticketModel;
    constructor(ticketModel: Model<TicketDocument>);
    add(planer: CreateTicket): Promise<any>;
    get(): Promise<TicketDocument[]>;
    getById(id: string): Promise<TicketDocument | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, TicketDocument> & import("./ticket.schema").Ticket & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<CreateTicket>): Promise<(import("mongoose").Document<unknown, {}, TicketDocument> & import("./ticket.schema").Ticket & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}