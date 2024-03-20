"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeGuestModule = void 0;
const common_1 = require("@nestjs/common");
const type_guest_service_1 = require("./type-guest.service");
const type_guest_controller_1 = require("./type-guest.controller");
const mongoose_1 = require("@nestjs/mongoose");
const type_guest_schema_1 = require("./type-guest.schema");
let TypeGuestModule = class TypeGuestModule {
};
exports.TypeGuestModule = TypeGuestModule;
exports.TypeGuestModule = TypeGuestModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "TypeGuest", schema: type_guest_schema_1.TypeGuestSchema }])],
        providers: [type_guest_service_1.TypeGuestService],
        controllers: [type_guest_controller_1.TypeGuestController]
    })
], TypeGuestModule);
//# sourceMappingURL=type-guest.module.js.map