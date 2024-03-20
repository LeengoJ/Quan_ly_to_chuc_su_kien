export declare class CustomerRequest {
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
    otherOrgaName: string;
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
