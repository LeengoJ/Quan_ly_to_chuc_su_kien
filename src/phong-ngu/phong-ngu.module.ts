import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhongNguSchema } from './phong-ngu.schema';
import { PhongNguService } from './phong-ngu.service';
import { LocationModule } from 'src/location/location.module';
import { PhongNguController } from './phong-ngu.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: "PhongNgu", schema: PhongNguSchema }])],
    providers: [PhongNguService],
    exports: [PhongNguService],
    controllers: [PhongNguController]
})
export class PhongNguModule { }
