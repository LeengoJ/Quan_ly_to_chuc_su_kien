import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
    // Địa điểm tổ chức sự kiện
    @Prop({ required: true })
    region!: string
    @Prop({ require: true })
    Nation!: string
    @Prop({ required: true })
    provinceCity!: string
    //Số Phòng tổ chức sự kiện
    @Prop({ required: true })
    roomEventNumber!: number
    //Thời gian
    @Prop()
    endDate!: Date;
    //Số người có thể tham gia mỗi ngày là bao nhiêu?
    @Prop()
    peopleIn1Day!: number;
    //Số phòng nghỉ mỗi đêm có thể đảm nhận là?
    @Prop()
    roomsNeeded!: number;
    //Đánh giá về địa điểm này từ 1 đến 5 sao thì là bao nhiêu?
    @Prop()
    rating!: number;
    //Có không gian họp ngoài trờ hay không?
    @Prop()
    outdoorMeetingSpace!: boolean;
    //Số phòng khách?
    @Prop()
    numberOfRooms!: number;
    //Số phòng họp
    @Prop()
    meetingRoom!: number;
    //Không gian triển lãm(diện tích)
    @Prop()
    outdoorMeeting!: number;
    //Truy cập Internet
    @Prop({ default: false })
    internetAccess!: boolean
    //Dịch vụ giặt ủi
    @Prop({ default: false })
    washingService!: boolean
    //Quang cảnh(vườn)
    @Prop()
    gardenLandscapeImages!: boolean
    //Quang cảnh(núi)
    @Prop({ default: false })
    mountainLandscapingImages!: boolean
    //Quang cảnh(đại dương hoặc nước)
    @Prop({ default: false })
    seaLandscapeImages!: boolean
    //Quang cảnh(đô thị)
    @Prop({ default: false })
    houseLandscapeImages!: boolean
    //Nhà hàng trong khuôn viên
    @Prop({ default: false })
    onsiteRestaurant!: boolean
    //Sòng bạc
    @Prop({ default: false })
    Casino!: boolean
    // Xe đưa đón sân bay miễn phí
    // Free airport shuttle
    @Prop({ default: false })
    freeAirportShuttle!: boolean
    // Phục vụ ăn uống tại chỗ
    // Onsite catering
    @Prop({ default: false })
    onsiteCatering!: boolean
    // Cửa hàng quà tặng trong khuôn viên
    // Onsite gift shop
    @Prop({ default: false })
    onsiteGiftShop!: boolean
    // Cho phép cung cấp thực phẩm bên ngoài
    // Outside caterers allowed
    @Prop({ default: false })
    outsideCaterersAllowed!: boolean
    // Thân thiện với vật nuôi
    // Pet friendly
    @Prop({ default: false })
    petFriendly!: boolean
    // Dịch vụ cho thuê xe
    // Rental car service
    @Prop({ default: false })
    rentalCarService!: boolean
    // Không gian(ngoài trời)
    //     Space(outdoor)
    @Prop({ default: false })
    spaceOutdoor!: boolean
    // Không gian(riêng tư)
    //     Space(private)
    @Prop({ default: false })
    spacePrivate!: boolean
    // Không gian(bán riêng tư)
    //     Space(semi-private)
    @Prop({ default: false })
    spaceSemiPrivate!: boolean
    // Xe lăn cho người khuyết tật
    // Wheelchair accessible
    @Prop({ default: false })
    wheelchairAccessible!: boolean
    // Bãi đỗ xe ngoài đường
    // Street parking
    @Prop({ default: false })
    streetParking!: boolean
    // Bãi đậu xe buýt
    // Bus parking
    @Prop({ default: false })
    busParking!: boolean
    // Bãi đậu xe miễn phí
    // Complimentary parking
    @Prop({ default: false })
    complimentaryParking!: boolean
    // Bãi đậu xe trả phí
    // Paid parking
    @Prop({ default: false })
    paidParking!: boolean
    // Bãi đậu xe
    // Valet parking
    @Prop({ default: false })
    valetParking!: boolean
    // Bể bơi ngoài trời
    // Outdoor pool
    @Prop({ default: false })
    outdoorPool!: boolean
    // Sân gôn trong khuôn viên
    // Golf course on grounds
    @Prop({ default: false })
    golfCourseOnGrounds!: boolean
    // Câu lạc bộ sức khỏe
    // Health club
    @Prop({ default: false })
    healthClub!: boolean
    // Hồ bơi trong nhà
    // Indoor pool
    @Prop({ default: false })
    indoorPool!: boolean
    // Trượt tuyết
    // Skiing
    @Prop({ default: false })
    skiing!: boolean
    // Spa hoặc thẩm mỹ viện
    // Spa or salon
    @Prop({ default: false })
    spaOrSalon!: boolean
    // Sân quần vợt
    // Tennis courts
    @Prop({ default: false })
    tennisCourts!: boolean
    // Thể thao dưới nước
    // Water sports
    @Prop({ default: false })
    waterSports!: boolean
    // xoáy nước
    // Whirlpool
    @Prop({ default: false })
    whirlpool!: boolean
    //Khả năng tiếp cận địa điểm
    // Train
    @Prop({ default: false })
    train!: boolean
    // Airport shuttle
    @Prop({ default: false })
    airportShuttle!: boolean
    // Bus
    @Prop({ default: false })
    bus!: boolean
    // Subway
    @Prop({ default: false })
    subway!: boolean;
    // Taxi
    @Prop({ default: false })
    taxi!: boolean;
    // Sàn nhảy
    // Dance floor
    @Prop({ default: false })
    danceFloor!: boolean;
    // Đàn piano
    // Piano
    @Prop({ default: false })
    piano!: boolean;
    // Máy sưởi di động
    // Portable heaters
    @Prop({ default: false })
    portableHeaters!: boolean;
    // Khu vực dàn dựng
    // Staging area
    @Prop({ default: false })
    stagingArea!: boolean;
}
export const LocationSchema = SchemaFactory.createForClass(Location);