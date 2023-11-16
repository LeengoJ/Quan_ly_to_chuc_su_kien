import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TypeEventService } from './type-event.service';
import { CreateTypeEvent } from 'src/common/dtos/type-event-dto/create-type-event-dto';

@Controller('type-events')
export class TypeEventController {
    constructor(private readonly typeEventService: TypeEventService) { }

    @Post()
    async create(@Body() typeEventData: CreateTypeEvent) {
        return await this.typeEventService.add(typeEventData);
    }

    @Get()
    async findAll() {
        return await this.typeEventService.get();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.typeEventService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.typeEventService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() typeEventData: Partial<CreateTypeEvent>) {
        return await this.typeEventService.update(id, typeEventData);
    }
}