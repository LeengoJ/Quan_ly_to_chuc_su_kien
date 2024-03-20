"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const event_module_1 = require("./event/event.module");
const ip_block_module_1 = require("./ip-block/ip-block.module");
const oganization_module_1 = require("./oganization/oganization.module");
const planer_module_1 = require("./planer/planer.module");
const location_module_1 = require("./location/location.module");
const phong_hoi_nghi_module_1 = require("./phong-hoi-nghi/phong-hoi-nghi.module");
const lich_module_1 = require("./lich/lich.module");
const phong_ngu_module_1 = require("./phong-ngu/phong-ngu.module");
const type_event_module_1 = require("./type-event/type-event.module");
const ticket_module_1 = require("./ticket/ticket.module");
const guest_module_1 = require("./guest/guest.module");
const type_guest_module_1 = require("./type-guest/type-guest.module");
const report_module_1 = require("./report/report.module");
const customer_request_module_1 = require("./customer-request/customer-request.module");
const permission_module_1 = require("./permission/permission.module");
const role_module_1 = require("./role/role.module");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth/auth.service");
const user_module_1 = require("./user/user.module");
const jwt_1 = require("@nestjs/jwt");
const local_strategy_1 = require("./auth/passport/local.strategy");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }), mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/Event'),
            auth_module_1.AuthModule,
            passport_1.PassportModule,
            ip_block_module_1.IpBlockModule,
            event_module_1.EventModule,
            oganization_module_1.OganizationModule,
            planer_module_1.PlanerModule,
            location_module_1.LocationModule,
            phong_hoi_nghi_module_1.PhongHoiNghiModule,
            lich_module_1.LichModule,
            phong_ngu_module_1.PhongNguModule,
            type_event_module_1.TypeEventModule,
            ticket_module_1.TicketModule,
            guest_module_1.GuestModule,
            type_guest_module_1.TypeGuestModule,
            report_module_1.ReportModule,
            customer_request_module_1.CustomerRequestModule,
            permission_module_1.PermissionModule,
            role_module_1.RoleModule,
            user_module_1.UserModule,
            jwt_1.JwtModule,
            passport_1.PassportModule
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map