"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhongNguModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const phong_ngu_schema_1 = require("./phong-ngu.schema");
const phong_ngu_service_1 = require("./phong-ngu.service");
const phong_ngu_controller_1 = require("./phong-ngu.controller");
let PhongNguModule = class PhongNguModule {
};
exports.PhongNguModule = PhongNguModule;
exports.PhongNguModule = PhongNguModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "PhongNgu", schema: phong_ngu_schema_1.PhongNguSchema }])],
        providers: [phong_ngu_service_1.PhongNguService],
        exports: [phong_ngu_service_1.PhongNguService],
        controllers: [phong_ngu_controller_1.PhongNguController]
    })
], PhongNguModule);
//# sourceMappingURL=phong-ngu.module.js.map