import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermission } from 'src/common/dtos/permission-dto/permisson-dto';

@Controller('permission')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) { }

    @Post('createPermission')
    async create(@Body() perData: CreatePermission) {

        return await this.permissionService.add(perData);
    }

    @Get()
    async findAll() {
        return await this.permissionService.get();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.permissionService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.permissionService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() perData: Partial<CreatePermission>) {
        return await this.permissionService.update(id, perData);
    }
}
