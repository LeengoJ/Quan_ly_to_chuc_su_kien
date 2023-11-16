import { Module } from '@nestjs/common';
import { MongooseModule, Prop } from '@nestjs/mongoose';
import { PhongHoiNghiService } from './phong-hoi-nghi.service';
import { PhongHoiNghiSchema } from './phong-hoi-nghi.schema';
import { PhongHoiNghiController } from './phong-hoi-nghi.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: "PhongHoiNghi", schema: PhongHoiNghiSchema }])],
  providers: [PhongHoiNghiService],
  exports: [PhongHoiNghiService],
  controllers: [PhongHoiNghiController]
})
export class PhongHoiNghiModule { }
