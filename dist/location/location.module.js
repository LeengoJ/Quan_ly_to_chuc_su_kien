"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationModule = void 0;
const common_1 = require("@nestjs/common");
const location_service_1 = require("./location.service");
const location_controller_1 = require("./location.controller");
const mongoose_1 = require("@nestjs/mongoose");
const location_schema_1 = require("./location.schema");
const phong_hoi_nghi_module_1 = require("../phong-hoi-nghi/phong-hoi-nghi.module");
const lich_module_1 = require("../lich/lich.module");
const phong_ngu_module_1 = require("../phong-ngu/phong-ngu.module");
let LocationModule = class LocationModule {
};
exports.LocationModule = LocationModule;
exports.LocationModule = LocationModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "Location", schema: location_schema_1.LocationSchema }]), phong_hoi_nghi_module_1.PhongHoiNghiModule, lich_module_1.LichModule, phong_ngu_module_1.PhongNguModule],
        providers: [location_service_1.LocationService],
        controllers: [location_controller_1.LocationController],
        exports: [location_service_1.LocationService]
    })
], LocationModule);
//# sourceMappingURL=location.module.js.map