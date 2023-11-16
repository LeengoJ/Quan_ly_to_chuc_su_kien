import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OganizationSchema } from './oganization.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Oganization", schema: OganizationSchema }])],
})
export class OganizationModule { }
