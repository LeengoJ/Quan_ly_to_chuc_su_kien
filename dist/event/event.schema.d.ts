import mongoose, { Date, Document, Types } from 'mongoose';
export type EventDocument = Event & Document;
export declare class Event {
    createdBy: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        countryRegion: string;
        address: string;
        organization: string;
        commissionRate: number;
    };
    departing: Date;
    endDate: Date;
    eventType: string;
    nameEvent: string;
    where: string;
    arivingOn: Date;
    flexible: boolean;
    guestRooms: boolean;
    maxGuest: number;
    meetingRoomIs: boolean;
    maxMeetingRoom: number;
    otherOrganization: boolean;
    status: boolean;
    outdoorMeetingSpace: boolean;
    listGuest: mongoose.Schema.Types.ObjectId[];
    isApproved: boolean;
}
export declare const EventSchema: mongoose.Schema<Event, mongoose.Model<Event, any, any, any, mongoose.Document<unknown, any, Event> & Event & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Event, mongoose.Document<unknown, {}, Event> & Event & {
    _id: Types.ObjectId;
}>;
