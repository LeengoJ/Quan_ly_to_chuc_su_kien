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
exports.IpBlockService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let IpBlockService = class IpBlockService {
    constructor(IPModel) {
        this.IPModel = IPModel;
    }
    async blockIp(ip) {
        const ipMoi = new this.IPModel({ ip });
        return (await ipMoi.save()).id;
    }
    async unBlockIp(ip) {
        return await this.IPModel.deleteOne({ ip });
    }
    async checkIp(ip) {
        let ip_check_bool = await this.IPModel.find({ ip: ip });
        if (ip_check_bool)
            return true;
        return false;
    }
    async getListIpBlock() {
        return await this.IPModel.find({});
    }
    async updateIp(id, data) {
        return await this.IPModel.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.IpBlockService = IpBlockService;
exports.IpBlockService = IpBlockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('ipBlock')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], IpBlockService);
//# sourceMappingURL=ip-block.service.js.map