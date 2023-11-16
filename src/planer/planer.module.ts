import { Module } from '@nestjs/common';
import { PlanerService } from './planer.service';
import { PlanerController } from './planer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanerSchema } from './planer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Planer", schema: PlanerSchema }])],
  providers: [PlanerService],
  controllers: [PlanerController]
})
export class PlanerModule { }
