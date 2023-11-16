import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRole } from 'src/common/dtos/role-dto/role-dto';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }

    @Post()
    async create(@Body() reportData: CreateRole) {
        return await this.roleService.add(reportData);
    }

    @Get()
    async findAll() {
        return await this.roleService.get();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.roleService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.roleService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() reportData: Partial<CreateRole>) {
        return await this.roleService.update(id, reportData);
    }
}
