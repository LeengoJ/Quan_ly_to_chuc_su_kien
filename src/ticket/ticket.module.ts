import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { TicketSchema } from './ticket.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Ticket", schema: TicketSchema }])],

  providers: [TicketService],
  controllers: [TicketController]
})
export class TicketModule { }
