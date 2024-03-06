import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { LocationService } from './location.service';
import { createLocationDto } from 'src/common/dtos/location-dto/create-location-dto';
import { updateLocationDto } from 'src/common/dtos/location-dto/update-location-dto';
import { reviewLocationDto } from 'src/common/dtos/location-dto/review-location-dto';

@Controller('location')
export class LocationController {
    constructor(private locationService: LocationService) { }

    @Post('create-location:id')
    createLocation(@Body() createLocationDto: createLocationDto) {
        this.locationService.createNewLocation(createLocationDto)
    }
    @Delete('delete-location:id')
    deleteLocation(@Param("id") id: string,) {
        this.locationService.deleteLocation(id)
    }
    @Put('update-location:id')
    updateLocation(@Param("id") id: string, @Body() updateLocation: updateLocationDto) {
        this.locationService.updateInfoLocation(id, updateLocation)
    }
    //tìm kiếm địa điểm tổ chức sự kiện 
    @Put('review-location')
    reviewLocation(@Body() rev: reviewLocationDto) {
        this.locationService.reviewLocation(rev)
    }
    @Get('get-all')
    getAll() {
        return this.locationService.getAll()
    }

}
