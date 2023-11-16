import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerRequestService } from './customer-request.service';
import { CustomerRequest } from 'src/common/dtos/customer-request';

@Controller('customer-request')
export class CustomerRequestController {
    constructor(private readonly cusReqService: CustomerRequestService) { }

    @Post()
    async create(@Body() reportData: CustomerRequest) {
        return await this.cusReqService.add(reportData);
    }

    @Get()
    async findAll() {
        return await this.cusReqService.get();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.cusReqService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.cusReqService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() reportData: Partial<CustomerRequest>) {
        return await this.cusReqService.update(id, reportData);
    }
}
