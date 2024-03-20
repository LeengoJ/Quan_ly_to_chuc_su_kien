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
exports.OganizationController = void 0;
const common_1 = require("@nestjs/common");
const oganization_service_1 = require("./oganization.service");
const create_organization_dto_1 = require("../common/dtos/create-organization-dto");
let OganizationController = class OganizationController {
    constructor(organizationService) {
        this.organizationService = organizationService;
    }
    add(Organization) {
        return this.organizationService.addOrganization(Organization);
    }
    update(updateOrganization, id) {
        return this.organizationService.updateIp(id, updateOrganization);
    }
    getList() {
        return this.organizationService.getOrganizations();
    }
    get(id) {
        return this.organizationService.getOrganizationById(id);
    }
};
exports.OganizationController = OganizationController;
__decorate([
    (0, common_1.Post)('add-Or'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organization_dto_1.CreateOganization]),
    __metadata("design:returntype", void 0)
], OganizationController.prototype, "add", null);
__decorate([
    (0, common_1.Put)('update-Or'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organization_dto_1.CreateOganization, String]),
    __metadata("design:returntype", void 0)
], OganizationController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('getListOr'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OganizationController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('get-Or'),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OganizationController.prototype, "get", null);
exports.OganizationController = OganizationController = __decorate([
    (0, common_1.Controller)('oganization'),
    __metadata("design:paramtypes", [oganization_service_1.OrganizationService])
], OganizationController);
//# sourceMappingURL=oganization.controller.js.map