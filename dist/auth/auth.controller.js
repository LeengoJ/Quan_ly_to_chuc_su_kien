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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const role_service_1 = require("../role/role.service");
const customize_1 = require("../common/decorator/customize");
const transform_interceptor_1 = require("../common/middlewares/transform.interceptor");
const login_dto_1 = require("../common/dtos/login-dto/login.dto");
const create_user_dto_1 = require("../common/dtos/user-dto/create-user-dto");
let AuthController = class AuthController {
    constructor(authService, roleService) {
        this.authService = authService;
        this.roleService = roleService;
    }
    handleLogin(User, response) {
        return this.authService.login(User, response);
    }
    handleRegister(registerUserDto) {
        return this.authService.register(registerUserDto);
    }
    async getAccountfromHeader(user) {
        const temp = await this.roleService.getById(user.role._id);
        user.permissions = temp.permissions;
        return { user };
    }
    handleRefreshToken(request, response) {
        const refresh_Token = request.cookies['refresh_token'];
        return this.authService.processNewToken(refresh_Token, response);
    }
    handleLogout(user, response) {
        return this.authService.logout(user, response);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Post)('/login'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Login user"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.UserLoginDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "handleLogin", null);
__decorate([
    (0, customize_1.Public)(),
    (0, customize_1.ResponseMessage)("Register a new user"),
    (0, common_1.Post)('/register'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.CreateInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "handleRegister", null);
__decorate([
    (0, common_1.Get)('account'),
    (0, customize_1.ResponseMessage)("Get user information"),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    __param(0, (0, customize_1.UserDecorate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAccountfromHeader", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)('refresh'),
    (0, customize_1.ResponseMessage)("Get user information"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "handleRefreshToken", null);
__decorate([
    (0, customize_1.ResponseMessage)("Logout user"),
    (0, common_1.Post)('logout'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    __param(0, (0, customize_1.UserDecorate)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "handleLogout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        role_service_1.RoleService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map