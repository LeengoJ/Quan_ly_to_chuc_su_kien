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
import { EventDocument } from './event.schema';
import { Model } from 'mongoose';
import { UpdateEventDto } from 'src/common/dtos/event-dto/update-event-dto';
export declare class EventService {
    private readonly eventModel;
    constructor(eventModel: Model<EventDocument>);
    createEvent(nameEvent: string, status: boolean, startDate: Date, endDate: Date, outdoorMeetingSpace: boolean, eventType: string, arivingOn: Date, departing: Date, flexible: boolean, guestRooms: boolean, maxGuest: number, meetingRoom: boolean, maxMeetingRoom: number, otherOrganization: boolean): Promise<EventDocument | null>;
    updateEvent(id: string, updatedUserData: Partial<UpdateEventDto>): Promise<import("mongoose").Document<unknown, {}, EventDocument> & import("./event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    adminDelete(id: string): Promise<(import("mongoose").Document<unknown, {}, EventDocument> & import("./event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    userDelete(id: string): Promise<(import("mongoose").Document<unknown, {}, EventDocument> & import("./event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    findByNameEvent(name: string): Promise<(import("mongoose").Document<unknown, {}, EventDocument> & import("./event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findEvent(): Promise<(import("mongoose").Document<unknown, {}, EventDocument> & import("./event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
