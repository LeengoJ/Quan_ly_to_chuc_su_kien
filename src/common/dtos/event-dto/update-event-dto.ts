export class UpdateEventDto {
    eventType!: string
    nameEvent!: string
    where!: string
    arivingOn!: Date;
    departing!: Date;
    flexible!: boolean;
    guestRooms!: boolean;
    maxGuest!: number;
    meetingRoomIs!: boolean;
    maxMeetingRoom!: number;
    otherOrganization!: boolean;
    status!: boolean
    endDate!: Date;
    startDate!: Date;
    outdoorMeetingSpace!: boolean
    isApproved!: boolean
    listGuest!: string[]
}