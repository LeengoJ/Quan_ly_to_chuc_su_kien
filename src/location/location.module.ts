import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from './location.schema';
import { PhongHoiNghiService } from 'src/phong-hoi-nghi/phong-hoi-nghi.service';
import { LichService } from 'src/lich/lich.service';
import { PhongNguService } from 'src/phong-ngu/phong-ngu.service';
import { PhongHoiNghiModule } from 'src/phong-hoi-nghi/phong-hoi-nghi.module';
import { LichModule } from 'src/lich/lich.module';
import { PhongNguModule } from 'src/phong-ngu/phong-ngu.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Location", schema: LocationSchema }]), PhongHoiNghiModule, LichModule, PhongNguModule],
  providers: [LocationService],
  controllers: [LocationController],
  exports: [LocationService]
})
export class LocationModule { }
