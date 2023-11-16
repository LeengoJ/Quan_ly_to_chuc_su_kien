import { Module } from '@nestjs/common';
import { IpBlockService } from './ip-block.service';
import { ipBlockSchema } from './ip-block.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { IpBlockController } from './ip-block.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: "ipBlock", schema: ipBlockSchema }])],
    providers: [IpBlockService],
    exports: [IpBlockService],
    controllers: [IpBlockController]
})
export class IpBlockModule {
}


