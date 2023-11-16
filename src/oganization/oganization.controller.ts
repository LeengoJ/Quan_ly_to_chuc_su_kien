import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { OrganizationService } from './oganization.service';
import { CreateOganization } from 'src/common/dtos/create-organization-dto';

@Controller('oganization')
export class OganizationController {
    constructor(private organizationService: OrganizationService) { }

    @Post('add-Or')
    add(@Body() Organization: CreateOganization) {
        return this.organizationService.addOrganization(Organization);
    }
    @Put('update-Or')
    update(
        @Body() updateOrganization: CreateOganization,
        @Param("id", ParseIntPipe) id: string,
    ) {
        return this.organizationService.updateIp(id, updateOrganization)
    }
    @Get('getListOr')
    getList() {
        return this.organizationService.getOrganizations()
    }
    @Get('get-Or')
    get(
        @Param("id", ParseIntPipe) id: string,
    ) {
        return this.organizationService.getOrganizationById(id)
    }
}
