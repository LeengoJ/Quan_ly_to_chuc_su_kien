import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventSchema } from './event.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: "Event", schema: EventSchema }])],

  providers: [EventService],
  controllers: [EventController]
})
export class EventModule { }
