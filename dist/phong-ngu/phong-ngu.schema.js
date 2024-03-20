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
exports.PhongNguSchema = exports.PhongNgu = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PhongNgu = class PhongNgu {
};
exports.PhongNgu = PhongNgu;
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], PhongNgu.prototype, "soGiuong", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], PhongNgu.prototype, "tenPhong", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Location' }),
    __metadata("design:type", String)
], PhongNgu.prototype, "LocationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], PhongNgu.prototype, "LoaiPhong", void 0);
exports.PhongNgu = PhongNgu = __decorate([
    (0, mongoose_1.Schema)()
], PhongNgu);
exports.PhongNguSchema = mongoose_1.SchemaFactory.createForClass(PhongNgu);
//# sourceMappingURL=phong-ngu.schema.js.map