export class CustomerRequest {
    //Ngày bắt đầu sự kiện
    departing!: Date;
    //Ngày kết thúc là ngày nào?
    endDate!: Date;
    //Dịa chỉ tổ chức sự kiện
    where!: {
        region: string
        Nation: string
        provinceCity: string
    }
    //Attendees per day
    attendeePerDay!: number;
    //Guest rooms per night
    guestRoomPerNight!: number;
    //People per guest room
    peoplePerGuestRoom!: number;

    //Name Event
    nameEvent!: string;
    //Kiểu sự kiện
    eventTypeId!: string
    //Ngày bắt đầu tiếp nhận khách là?
    arivingOn!: Date;
    //Departing on
    departureOn!: Date;
    //Are your event dates flexible?
    isFlexibleEvent!: boolean
    //Does your event need meeting rooms?
    meetingRoomIs!: boolean;



    //Are you planning this event for another organization?
    planForOtherOrganization!: boolean;
    //If yes, please provide the name of that organization.
    otherOrgaName!: string;

    // First name
    firstName!: string;
    // Last Name
    lastName!: string;
    // Email
    email!: string;
    // Phone Number
    phoneNumber!: string;
    //Country/Region
    countryRegion!: string;
    //Address
    address!: string;
    //Organization
    organization!: string;
    //Commission rate
    commissionRate!: number;

    //Client organization name
    clientOrgName!: string;
    //Industry
    industry!: string;
    //Client organization
    clientOrg!: string;

    //When do you need to hear from venues by
    hearingByDate!: Date;
    //How do you prefer to be contacted
    preferredContactMethod!: string;


    //Số Khách mời tối đa
    maxGuest!: number;

    maxMeetingRoom!: number;
    //Có cần không gian họp ngoài trờ hay không?
    outdoorMeetingSpace!: boolean
    //tình trạng sự kiện đã phê duyệt hay chưa
    isApproved!: boolean

}