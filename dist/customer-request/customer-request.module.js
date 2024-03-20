"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRequestModule = void 0;
const common_1 = require("@nestjs/common");
const customer_request_service_1 = require("./customer-request.service");
const customer_request_controller_1 = require("./customer-request.controller");
const mongoose_1 = require("@nestjs/mongoose");
const customer_request_schema_1 = require("./customer-request.schema");
const location_module_1 = require("../location/location.module");
let CustomerRequestModule = class CustomerRequestModule {
};
exports.CustomerRequestModule = CustomerRequestModule;
exports.CustomerRequestModule = CustomerRequestModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "CusReq", schema: customer_request_schema_1.CusReqSchema }]), location_module_1.LocationModule],
        providers: [customer_request_service_1.CustomerRequestService],
        controllers: [customer_request_controller_1.CustomerRequestController]
    })
], CustomerRequestModule);
//# sourceMappingURL=customer-request.module.js.map