import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { UserDetails } from './user-details.interface';

import { UserDocument } from './user.schema';
import { NewUserDTO } from './dtos/new-user.dto';
import { compareSync, genSaltSync, hashSync } from 'bcrypt';

import { RoleService } from 'src/role/role.service';
import { USER_ROLE } from 'src/common/config/env';
import { CreateUserDto } from 'src/common/dtos/user-dto/create-user-dto';



@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>,
        private readonly roleService: RoleService
    ) { }

    _getUserDetails(user: UserDocument): UserDetails {
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
        };
    }

    async findByEmail(email: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async findById(id: string): Promise<UserDetails | null> {
        const user = await this.userModel.findById(id).exec();
        if (!user) return null;
        return this._getUserDetails(user);
    }
    async findUserByToken(token: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ token }).exec();
    }

    async create(createUserDto: CreateUserDto) {
        // const isValidEmail = this.userModel.findOne({ email: createUserDto.email })
        // if (isValidEmail) {
        //   throw new BadRequestException(`Email ${createUserDto.email} đã tồn tại`)
        // }
        const hashPassword = this.getHashPassword(createUserDto.password);

        const user = await this.userModel.create({
            email: createUserDto.email,
            password: hashPassword,
            name: createUserDto.name,
            role: createUserDto.role,
        })
        return user;
    }
    async delete(id: string): Promise<UserDocument> {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new NotFoundException('User not found');
        }
        return deletedUser;
    }
    async update(id: string, updatedUserData: Partial<UserDocument>): Promise<UserDocument> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updatedUserData, { new: true });
        if (!updatedUser) {
            throw new NotFoundException('User not found');
        }
        return updatedUser;
    }
    getHashPassword = (password: string) => {
        const salt = genSaltSync(10);
        const hash = hashSync(password, salt);
        return hash;
    }
    async register(User: CreateUserDto) {

        const isValidEmail = this.userModel.findOne({ email: User.email })
        if (isValidEmail == undefined) {
            throw new BadRequestException(`Email ${User.email} đã tồn tại`)
        }
        const userRole = await this.roleService.getbyName(USER_ROLE)
        const hashPassword = this.getHashPassword(User.password);
        return await this.create(User);
    }
    isValidPassword(password: string, hash: string) {
        return compareSync(password, hash);
    }
    updateRefresh_Token = async (id: any, refreshToken: any) => {
        return await this.userModel.findByIdAndUpdate(id, {
            refreshToken: refreshToken
        })
    }
    async findAll() {
        return await this.userModel.find();
    }
}
