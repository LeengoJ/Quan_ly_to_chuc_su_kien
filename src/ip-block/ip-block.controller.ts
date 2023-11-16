import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { IpBlockService } from './ip-block.service';
import { CreateIpBlockDto } from 'src/common/dtos/ipblock-dto/create-ip-block-dto';
import { UpdateIpBlockDto } from 'src/common/dtos/ipblock-dto/update-ip-block-dto';


@Controller('ip-block')
export class IpBlockController {
    constructor(private ipBlockService: IpBlockService) { }

    @Post('block-ip')
    addIpBlock(@Body('ip') ip: string) {
        return this.ipBlockService.blockIp(ip);
    }
    @Put('update-ip')
    updateIp(
        @Body() updateIpBlock: UpdateIpBlockDto,
        @Param("id", ParseIntPipe) id: string,
    ) {
        return this.ipBlockService.updateIp(id, updateIpBlock)
    }
    // ip: string,@Body() createIpBlock: CreateIpBlockDto
    @Get('getListIpBlock')
    getListIpBlock() {
        return this.ipBlockService.getListIpBlock()
    }
}
