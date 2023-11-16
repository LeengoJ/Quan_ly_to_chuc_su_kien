import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { IpBlockModule } from './ip-block/ip-block.module';
import { OganizationModule } from './oganization/oganization.module';
import { PlanerModule } from './planer/planer.module';
import { LocationModule } from './location/location.module';
import { PhongHoiNghiModule } from './phong-hoi-nghi/phong-hoi-nghi.module';
import { LichModule } from './lich/lich.module';
import { PhongNguModule } from './phong-ngu/phong-ngu.module';
import { TypeEventModule } from './type-event/type-event.module';
import { TicketModule } from './ticket/ticket.module';
import { GuestModule } from './guest/guest.module';
import { TypeGuestModule } from './type-guest/type-guest.module';
import { ReportModule } from './report/report.module';
import { CustomerRequestModule } from './customer-request/customer-request.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { ModuleNameModule } from './module_name/module_name.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), MongooseModule.forRoot('mongodb://127.0.0.1:27017/Event'), AuthModule, IpBlockModule, EventModule, OganizationModule, PlanerModule, LocationModule, PhongHoiNghiModule, LichModule, PhongNguModule, TypeEventModule, TicketModule, GuestModule, TypeGuestModule, ReportModule, CustomerRequestModule, PermissionModule, RoleModule, ModuleNameModule//,, TaskModule, CalendarModule,
  ],
  providers: [],
  controllers: [],
  //LichService, 
  //}), MongooseModule.forRoot('mongodb + srv://lexuanngo13:13052002Ngo@cluster0.et3euxq.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule { }
