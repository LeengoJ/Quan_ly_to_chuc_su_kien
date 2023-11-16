import { Module } from '@nestjs/common';
import { TypeEventController } from './type-event.controller';
import { TypeEventService } from './type-event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeEventSchema } from './type-event.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "TypeEvent", schema: TypeEventSchema }])],

  controllers: [TypeEventController],
  providers: [TypeEventService]
})
export class TypeEventModule { }
