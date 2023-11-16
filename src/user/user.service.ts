import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { UserDetails } from './user-details.interface';

import { UserDocument } from './user.schema';
import { NewUserDTO } from './dtos/new-user.dto';



@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>,
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

    async create(
        // username: string,
        phoneNumber: string,
        name: string,
        email: string,
        hashedPassword: string,
    ): Promise<UserDocument> {
        const newUser = new this.userModel({
            name,
            email,
            password: hashedPassword,
            phoneNumber
        });
        return newUser.save();
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
}
