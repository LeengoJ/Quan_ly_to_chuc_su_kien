import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestSchema } from './guest.schema';
import { GuestController } from './guest.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Guest", schema: GuestSchema }])],

  providers: [GuestService],

  controllers: [GuestController]
})
export class GuestModule { }
