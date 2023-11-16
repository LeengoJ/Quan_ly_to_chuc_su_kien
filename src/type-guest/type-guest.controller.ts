import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TypeGuestService } from './type-guest.service';
import { CreateTypeGuest } from 'src/common/dtos/type-guest/create-type-guest';

@Controller('type-guest')
export class TypeGuestController {
    constructor(private readonly typeGuestService: TypeGuestService) { }

    @Post()
    async create(@Body() typeEventData: CreateTypeGuest) {
        return await this.typeGuestService.add(typeEventData);
    }

    @Get()
    async findAll() {
        return await this.typeGuestService.get();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.typeGuestService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.typeGuestService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() typeEventData: Partial<CreateTypeGuest>) {
        return await this.typeGuestService.update(id, typeEventData);
    }
}
