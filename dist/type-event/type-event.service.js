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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeEventService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let TypeEventService = class TypeEventService {
    constructor(typeEventModel) {
        this.typeEventModel = typeEventModel;
    }
    async add(planer) {
        const newO = new this.typeEventModel(planer);
        return (await newO.save()).id;
    }
    async get() {
        return this.typeEventModel.find();
    }
    async getById(id) {
        return this.typeEventModel.findById(id);
    }
    async delete(id) {
        return await this.typeEventModel.findByIdAndDelete(id);
    }
    async update(id, data) {
        return await this.typeEventModel.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.TypeEventService = TypeEventService;
exports.TypeEventService = TypeEventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('TypeEvent')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TypeEventService);
//# sourceMappingURL=type-event.service.js.map