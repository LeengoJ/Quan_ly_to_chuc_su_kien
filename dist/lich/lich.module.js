"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LichModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const lich_schema_1 = require("./lich.schema");
const lich_service_1 = require("./lich.service");
const phong_hoi_nghi_module_1 = require("../phong-hoi-nghi/phong-hoi-nghi.module");
const lich_controller_1 = require("./lich.controller");
let LichModule = class LichModule {
};
exports.LichModule = LichModule;
exports.LichModule = LichModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "Lich", schema: lich_schema_1.LichSchema }]), phong_hoi_nghi_module_1.PhongHoiNghiModule],
        providers: [lich_service_1.LichService],
        exports: [lich_service_1.LichService],
        controllers: [lich_controller_1.LichController]
    })
], LichModule);
//# sourceMappingURL=lich.module.js.map