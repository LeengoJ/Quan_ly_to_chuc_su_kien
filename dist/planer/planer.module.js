"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanerModule = void 0;
const common_1 = require("@nestjs/common");
const planer_service_1 = require("./planer.service");
const planer_controller_1 = require("./planer.controller");
const mongoose_1 = require("@nestjs/mongoose");
const planer_schema_1 = require("./planer.schema");
let PlanerModule = class PlanerModule {
};
exports.PlanerModule = PlanerModule;
exports.PlanerModule = PlanerModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "Planer", schema: planer_schema_1.PlanerSchema }])],
        providers: [planer_service_1.PlanerService],
        controllers: [planer_controller_1.PlanerController]
    })
], PlanerModule);
//# sourceMappingURL=planer.module.js.map