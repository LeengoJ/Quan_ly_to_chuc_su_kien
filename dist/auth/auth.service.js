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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const role_service_1 = require("../role/role.service");
const env_1 = require("../common/config/env");
const bcrypt_1 = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService, roleService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.roleService = roleService;
        this.getHashPassword = (password) => {
            const salt = (0, bcrypt_1.genSaltSync)(10);
            const hash = (0, bcrypt_1.hashSync)(password, salt);
            return hash;
        };
        this.getRefresh_token = (payload) => {
            return this.jwtService.sign(payload, {
                secret: env_1.JWT_REFRESH_TOKEN_SECRET,
                expiresIn: env_1.JWT_REFRESH_TOKEN_EXPIRED
            });
        };
        this.processNewToken = async (refresh_Token, response) => {
            try {
                this.jwtService.verify(refresh_Token, {
                    secret: env_1.JWT_REFRESH_TOKEN_SECRET
                });
                const user = await this.usersService.findUserByToken(refresh_Token);
                if (user) {
                    const id = user?.id;
                    const name = user?.name;
                    const email = user?.email;
                    const role = user?.role;
                    const payload = {
                        sub: "token login",
                        iss: "from server",
                        id,
                        name,
                        email,
                        role
                    };
                    const refresh_token = this.getRefresh_token(payload);
                    await this.usersService.updateRefresh_Token(id, refresh_token);
                    const userRole = user.role;
                    const temp = await this.roleService.getById(userRole._id);
                    response.clearCookie("refresh_token");
                    response.cookie('refresh_token', refresh_token, {
                        httpOnly: true,
                        maxAge: 36000
                    });
                    return {
                        access_token: this.jwtService.sign(payload),
                        user: {
                            id,
                            name,
                            email,
                            role,
                            permissions: temp?.permissions ?? []
                        }
                    };
                }
            }
            catch (error) {
                throw new common_1.BadRequestException("Refresh token không hợp lệ . Vui lòng đăng nhập lại");
            }
        };
        this.logout = async (user, response) => {
            this.usersService.updateRefresh_Token(user.id, "");
            response.clearCookie("refresh_token");
            return "Ok";
        };
    }
    async validateUser(email, pass) {
        const user = await this.usersService.findByEmail(email);
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password);
            if (isValid) {
                const userRole = user.role;
                const temp = await this.roleService.getById(userRole._id);
                const objUser = {
                    ...user.toObject(),
                    permissions: temp?.permissions ?? []
                };
                return objUser;
            }
            else {
                return null;
            }
        }
    }
    async login(userinf, response) {
        const user = await this.usersService.findByEmail(userinf.email);
        console.log(user);
        if (user) {
            const isMatch = await (0, bcrypt_1.compare)(userinf.password, user?.password);
            if (!isMatch) {
                throw new common_1.UnauthorizedException();
            }
            const { id, name, email, role, permissions } = user;
            const payload = {
                sub: "token login",
                iss: "from server",
                id,
                name,
                email,
                role,
                permissions
            };
            const refresh_token = this.getRefresh_token(payload);
            await this.usersService.updateRefresh_Token(id, refresh_token);
            response.cookie('refresh_token', refresh_token, {
                httpOnly: true,
                maxAge: 36000
            });
            return {
                access_token: this.jwtService.sign(payload),
                user: user
            };
        }
        else
            return null;
    }
    async register(User) {
        const user = await this.usersService.register(User);
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        role_service_1.RoleService])
], AuthService);
//# sourceMappingURL=auth.service.js.map