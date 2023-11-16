import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PhongNguService } from './phong-ngu.service';
import { PhongNguDto } from 'src/common/dtos/phong-ngu-dto/create-phongngu-dto';

@Controller('phong-ngu')
export class PhongNguController {

    constructor(private readonly phongNguService: PhongNguService) { }

    @Post()
    async create(@Body() PhongNguData: PhongNguDto) {
        return await this.phongNguService.addPhongNGu(PhongNguData);
    }

    @Get()
    async findAll() {
        return await this.phongNguService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.phongNguService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.phongNguService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() PhongNguData: Partial<PhongNguDto>) {
        return await this.phongNguService.update(id, PhongNguData);
    }


}
