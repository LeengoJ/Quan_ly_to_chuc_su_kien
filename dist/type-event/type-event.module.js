"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeEventModule = void 0;
const common_1 = require("@nestjs/common");
const type_event_controller_1 = require("./type-event.controller");
const type_event_service_1 = require("./type-event.service");
const mongoose_1 = require("@nestjs/mongoose");
const type_event_schema_1 = require("./type-event.schema");
let TypeEventModule = class TypeEventModule {
};
exports.TypeEventModule = TypeEventModule;
exports.TypeEventModule = TypeEventModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "TypeEvent", schema: type_event_schema_1.TypeEventSchema }])],
        controllers: [type_event_controller_1.TypeEventController],
        providers: [type_event_service_1.TypeEventService]
    })
], TypeEventModule);
//# sourceMappingURL=type-event.module.js.map