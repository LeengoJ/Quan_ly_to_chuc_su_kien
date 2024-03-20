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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt_1 = require("bcrypt");
const role_service_1 = require("../role/role.service");
const env_1 = require("../common/config/env");
let UserService = class UserService {
    constructor(userModel, roleService) {
        this.userModel = userModel;
        this.roleService = roleService;
        this.getHashPassword = (password) => {
            const salt = (0, bcrypt_1.genSaltSync)(10);
            const hash = (0, bcrypt_1.hashSync)(password, salt);
            return hash;
        };
        this.updateRefresh_Token = async (id, refreshToken) => {
            return await this.userModel.findByIdAndUpdate(id, {
                refreshToken: refreshToken
            });
        };
    }
    _getUserDetails(user) {
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
        };
    }
    async findByEmail(email) {
        return this.userModel.findOne({ email }).exec();
    }
    async findById(id) {
        const user = await this.userModel.findById(id).exec();
        if (!user)
            return null;
        return this._getUserDetails(user);
    }
    async findUserByToken(token) {
        return this.userModel.findOne({ token }).exec();
    }
    async create(createUserDto) {
        const hashPassword = this.getHashPassword(createUserDto.password);
        const user = await this.userModel.create({
            email: createUserDto.email,
            password: hashPassword,
            name: createUserDto.name,
            role: createUserDto.role,
        });
        return user;
    }
    async delete(id) {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return deletedUser;
    }
    async update(id, updatedUserData) {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updatedUserData, { new: true });
        if (!updatedUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return updatedUser;
    }
    async register(User) {
        const isValidEmail = this.userModel.findOne({ email: User.email });
        if (isValidEmail == undefined) {
            throw new common_1.BadRequestException(`Email ${User.email} đã tồn tại`);
        }
        const userRole = await this.roleService.getbyName(env_1.USER_ROLE);
        const hashPassword = this.getHashPassword(User.password);
        return await this.create(User);
    }
    isValidPassword(password, hash) {
        return (0, bcrypt_1.compareSync)(password, hash);
    }
    async findAll() {
        return await this.userModel.find();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        role_service_1.RoleService])
], UserService);
//# sourceMappingURL=user.service.js.map