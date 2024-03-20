"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipBlockSchema = exports.ipBlock = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ipBlock = class ipBlock {
};
exports.ipBlock = ipBlock;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ipBlock.prototype, "ip", void 0);
exports.ipBlock = ipBlock = __decorate([
    (0, mongoose_1.Schema)()
], ipBlock);
exports.ipBlockSchema = mongoose_1.SchemaFactory.createForClass(ipBlock);
//# sourceMappingURL=ip-block.schema.js.map