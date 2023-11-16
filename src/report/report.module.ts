import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSchema } from 'src/ticket/ticket.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Report", schema: TicketSchema }])],

  providers: [ReportService],
  controllers: [ReportController]
})
export class ReportModule { }
