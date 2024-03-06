import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GuestService } from './guest.service';
import { CreateGuest } from 'src/common/dtos/guest-dto/create-guest-dto';

@Controller('guest')
export class GuestController {
    constructor(private readonly guestService: GuestService) { }

    @Post()
    async create(@Body() reportData: CreateGuest) {
        console.log(new Date())
        return await this.guestService.add(reportData);
    }

    @Get()
    async findAll() {
        return await this.guestService.get();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.guestService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.guestService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() reportData: Partial<CreateGuest>) {
        return await this.guestService.update(id, reportData);
    }
}
