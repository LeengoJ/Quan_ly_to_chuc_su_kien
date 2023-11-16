import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LichSchema } from './lich.schema';
import { LichService } from './lich.service';
import { PhongHoiNghiModule } from 'src/phong-hoi-nghi/phong-hoi-nghi.module';
import { LichController } from './lich.controller';
import { PhongHoiNghiService } from 'src/phong-hoi-nghi/phong-hoi-nghi.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Lich", schema: LichSchema }]), PhongHoiNghiModule],
    providers: [LichService],
    exports: [LichService],
    controllers: [LichController]
})
export class LichModule { }
