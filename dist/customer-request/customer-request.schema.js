"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CusReqSchema = exports.CusReq = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let CusReq = class CusReq {
};
exports.CusReq = CusReq;
exports.CusReq = CusReq = __decorate([
    (0, mongoose_1.Schema)()
], CusReq);
exports.CusReqSchema = mongoose_1.SchemaFactory.createForClass(CusReq);
//# sourceMappingURL=customer-request.schema.js.map