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
exports.IpBlockController = void 0;
const common_1 = require("@nestjs/common");
const ip_block_service_1 = require("./ip-block.service");
const update_ip_block_dto_1 = require("../common/dtos/ipblock-dto/update-ip-block-dto");
let IpBlockController = class IpBlockController {
    constructor(ipBlockService) {
        this.ipBlockService = ipBlockService;
    }
    addIpBlock(ip) {
        return this.ipBlockService.blockIp(ip);
    }
    updateIp(updateIpBlock, id) {
        return this.ipBlockService.updateIp(id, updateIpBlock);
    }
    getListIpBlock() {
        return this.ipBlockService.getListIpBlock();
    }
};
exports.IpBlockController = IpBlockController;
__decorate([
    (0, common_1.Post)('block-ip'),
    __param(0, (0, common_1.Body)('ip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IpBlockController.prototype, "addIpBlock", null);
__decorate([
    (0, common_1.Put)('update-ip'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_ip_block_dto_1.UpdateIpBlockDto, String]),
    __metadata("design:returntype", void 0)
], IpBlockController.prototype, "updateIp", null);
__decorate([
    (0, common_1.Get)('getListIpBlock'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IpBlockController.prototype, "getListIpBlock", null);
exports.IpBlockController = IpBlockController = __decorate([
    (0, common_1.Controller)('ip-block'),
    __metadata("design:paramtypes", [ip_block_service_1.IpBlockService])
], IpBlockController);
//# sourceMappingURL=ip-block.controller.js.map