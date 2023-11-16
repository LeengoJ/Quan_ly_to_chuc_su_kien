import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReport } from 'src/common/dtos/report-dto/create-report-dto';

@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) { }

    @Post()
    async create(@Body() reportData: CreateReport) {
        return await this.reportService.add(reportData);
    }

    @Get()
    async findAll() {
        return await this.reportService.get();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.reportService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.reportService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() reportData: Partial<CreateReport>) {
        return await this.reportService.update(id, reportData);
    }
}
