import { Module } from '@nestjs/common';
import { CustomerRequestService } from './customer-request.service';
import { CustomerRequestController } from './customer-request.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CusReqSchema } from './customer-request.schema';
import { LocationModule } from 'src/location/location.module';
import { LocationService } from 'src/location/location.service';
import { PhongHoiNghi } from 'src/phong-hoi-nghi/phong-hoi-nghi.schema';
import { PhongHoiNghiModule } from 'src/phong-hoi-nghi/phong-hoi-nghi.module';
import { LichModule } from 'src/lich/lich.module';
import { PhongNguModule } from 'src/phong-ngu/phong-ngu.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: "CusReq", schema: CusReqSchema }]), LocationModule],
  providers: [CustomerRequestService],
  controllers: [CustomerRequestController]
})
export class CustomerRequestModule { }
