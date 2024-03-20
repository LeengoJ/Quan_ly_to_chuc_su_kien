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
import { Document } from 'mongoose';
export type LocationDocument = Location & Document;
export declare class Location {
    region: string;
    Nation: string;
    provinceCity: string;
    roomEventNumber: number;
    endDate: Date;
    peopleIn1Day: number;
    roomsNeeded: number;
    rating: number;
    outdoorMeetingSpace: boolean;
    numberOfRooms: number;
    meetingRoom: number;
    outdoorMeeting: number;
    internetAccess: boolean;
    washingService: boolean;
    gardenLandscapeImages: boolean;
    mountainLandscapingImages: boolean;
    seaLandscapeImages: boolean;
    houseLandscapeImages: boolean;
    onsiteRestaurant: boolean;
    Casino: boolean;
    freeAirportShuttle: boolean;
    onsiteCatering: boolean;
    onsiteGiftShop: boolean;
    outsideCaterersAllowed: boolean;
    petFriendly: boolean;
    rentalCarService: boolean;
    spaceOutdoor: boolean;
    spacePrivate: boolean;
    spaceSemiPrivate: boolean;
    wheelchairAccessible: boolean;
    streetParking: boolean;
    busParking: boolean;
    complimentaryParking: boolean;
    paidParking: boolean;
    valetParking: boolean;
    outdoorPool: boolean;
    golfCourseOnGrounds: boolean;
    healthClub: boolean;
    indoorPool: boolean;
    skiing: boolean;
    spaOrSalon: boolean;
    tennisCourts: boolean;
    waterSports: boolean;
    whirlpool: boolean;
    train: boolean;
    airportShuttle: boolean;
    bus: boolean;
    subway: boolean;
    taxi: boolean;
    danceFloor: boolean;
    piano: boolean;
    portableHeaters: boolean;
    stagingArea: boolean;
}
export declare const LocationSchema: import("mongoose").Schema<Location, import("mongoose").Model<Location, any, any, any, Document<unknown, any, Location> & Location & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Location, Document<unknown, {}, Location> & Location & {
    _id: import("mongoose").Types.ObjectId;
}>;
