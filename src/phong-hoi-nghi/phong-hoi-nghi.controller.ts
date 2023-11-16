import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PhongHoiNghiService } from './phong-hoi-nghi.service';
import { PhongNguDto } from 'src/common/dtos/phong-ngu-dto/create-phongngu-dto';
import { PhongHoiNghiDTO } from 'src/common/dtos/phong-hoi-nghi-dto/phong-hoi-nghi-dto';

@Controller('phong-hoi-nghi')
export class PhongHoiNghiController {


    constructor(private readonly phongHoiNghiService: PhongHoiNghiService) { }

    @Post()
    async create(@Body() PhongHoiNghiData: PhongHoiNghiDTO) {
        return await this.phongHoiNghiService.add(PhongHoiNghiData);
    }

    @Get()
    async findAll() {
        return await this.phongHoiNghiService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.phongHoiNghiService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.phongHoiNghiService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() PhongNguData: Partial<PhongNguDto>) {
        return await this.phongHoiNghiService.update(id, PhongNguData);
    }




}
