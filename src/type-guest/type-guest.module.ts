import { Module } from '@nestjs/common';
import { TypeGuestService } from './type-guest.service';
import { TypeGuestController } from './type-guest.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeGuestSchema } from './type-guest.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "TypeGuest", schema: TypeGuestSchema }])],
  providers: [TypeGuestService],
  controllers: [TypeGuestController]
})
export class TypeGuestModule { }
