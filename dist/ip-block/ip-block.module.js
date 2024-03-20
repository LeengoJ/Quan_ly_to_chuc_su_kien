"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpBlockModule = void 0;
const common_1 = require("@nestjs/common");
const ip_block_service_1 = require("./ip-block.service");
const ip_block_schema_1 = require("./ip-block.schema");
const mongoose_1 = require("@nestjs/mongoose");
const ip_block_controller_1 = require("./ip-block.controller");
let IpBlockModule = class IpBlockModule {
};
exports.IpBlockModule = IpBlockModule;
exports.IpBlockModule = IpBlockModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "ipBlock", schema: ip_block_schema_1.ipBlockSchema }])],
        providers: [ip_block_service_1.IpBlockService],
        exports: [ip_block_service_1.IpBlockService],
        controllers: [ip_block_controller_1.IpBlockController]
    })
], IpBlockModule);
//# sourceMappingURL=ip-block.module.js.map