export class CreateReport {
    //khách mời
    guestId!: string;
    //sự kiện
    eventId!: string;
    //số lượng người tối đa của vé
    quantity?: number;
    //tổng số tiền phải trả cho Report này
    totalPrice?: number;
}