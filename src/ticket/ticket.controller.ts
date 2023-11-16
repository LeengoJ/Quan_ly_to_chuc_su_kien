import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicket } from 'src/common/dtos/ticket-dto/create-ticket-dto';

@Controller('ticket')
export class TicketController {
    constructor(private readonly ticketService: TicketService) { }

    @Post()
    async create(@Body() typeEventData: CreateTicket) {
        return await this.ticketService.add(typeEventData);
    }

    @Get()
    async findAll() {
        return await this.ticketService.get();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.ticketService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.ticketService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() typeEventData: Partial<CreateTicket>) {
        return await this.ticketService.update(id, typeEventData);
    }
}
