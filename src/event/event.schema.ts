import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { Date, Document, Types } from 'mongoose';
export type EventDocument = Event & Document;
@Schema()
export class Event {
    //Người tạo sự kiện
    createdBy!: {
        // First name
        firstName: string;
        // Last Name
        lastName: string;
        // Email
        email: string;
        // Phone Number
        phoneNumber: string;
        //Country/Region
        countryRegion: string;
        //Address
        address: string;
        //Organization
        organization: string;
        //Commission rate
        commissionRate: number;
    };
    //Tên sự kiện
    //Ngày bắt đầu sự kiện
    @Prop({ required: true, type: Date })
    departing!: Date;
    //Ngày kết thúc là ngày nào?
    @Prop({ type: Date })
    endDate!: Date;
    //Kiểu sự kiện
    @Prop({ type: Types.ObjectId, ref: "TypeEvent", required: true })
    eventType!: string
    //Tên Sự kiện
    @Prop({ required: true })
    nameEvent!: string
    //Dịa chỉ tổ chức sự kiện
    @Prop({ type: Types.ObjectId, ref: "Location", required: true })
    where!: string
    //Ngày bắt đầu tiếp nhận khách là?
    @Prop({ required: true, type: Date })
    arivingOn!: Date;


    //Sự kiện này có gấp không
    @Prop({ require: true, default: false })
    flexible!: boolean;
    // GUEST ROOMS
    @Prop({ required: true })
    guestRooms!: boolean;
    //Số Khách mời tối đa
    @Prop({ required: true, default: 0 })
    maxGuest!: number;
    // meeting room
    @Prop({ required: true })
    meetingRoomIs!: boolean;
    @Prop({ required: true, default: 0 })
    maxMeetingRoom!: number;
    //Are you planning this event for another organization?
    @Prop({ required: true })
    otherOrganization!: boolean;
    //Sự kiện có đang tồn tại hay không
    @Prop({ required: true, default: true })
    status!: boolean

    //Có cần không gian họp ngoài trờ hay không?
    @Prop()
    outdoorMeetingSpace!: boolean
    //danh sach khach moi
    @Prop()
    listGuest!: mongoose.Schema.Types.ObjectId[]
    //tình trạng sự kiện đã phê duyệt hay chưa
    @Prop({ required: true, default: false })
    isApproved!: boolean
}
export const EventSchema = SchemaFactory.createForClass(Event);