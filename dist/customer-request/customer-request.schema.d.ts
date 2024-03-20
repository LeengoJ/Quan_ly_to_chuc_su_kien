import mongoose, { Date, Document, Types } from 'mongoose';
export type CusReqDocument = CusReq & Document;
export declare class CusReq {
    departing: Date;
    endDate: Date;
    where: {
        region: string;
        Nation: string;
        provinceCity: string;
    };
    attendeePerDay: number;
    guestRoomPerNight: number;
    peoplePerGuestRoom: number;
    nameEvent: string;
    eventTypeId: string;
    arivingOn: Date;
    departureOn: Date;
    isFlexibleEvent: boolean;
    meetingRoomIs: boolean;
    planForOtherOrganization: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    countryRegion: string;
    address: string;
    organization: string;
    commissionRate: number;
    clientOrgName: string;
    industry: string;
    clientOrg: string;
    hearingByDate: Date;
    preferredContactMethod: string;
    maxGuest: number;
    maxMeetingRoom: number;
    outdoorMeetingSpace: boolean;
    isApproved: boolean;
}
export declare const CusReqSchema: mongoose.Schema<CusReq, mongoose.Model<CusReq, any, any, any, mongoose.Document<unknown, any, CusReq> & CusReq & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, CusReq, mongoose.Document<unknown, {}, CusReq> & CusReq & {
    _id: Types.ObjectId;
}>;
