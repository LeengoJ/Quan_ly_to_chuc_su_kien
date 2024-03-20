import { LocationService } from './location.service';
import { createLocationDto } from 'src/common/dtos/location-dto/create-location-dto';
import { updateLocationDto } from 'src/common/dtos/location-dto/update-location-dto';
import { reviewLocationDto } from 'src/common/dtos/location-dto/review-location-dto';
export declare class LocationController {
    private locationService;
    constructor(locationService: LocationService);
    createLocation(createLocationDto: createLocationDto): void;
    deleteLocation(id: string): void;
    updateLocation(id: string, updateLocation: updateLocationDto): void;
    reviewLocation(rev: reviewLocationDto): void;
    getAll(): Promise<void>;
}
