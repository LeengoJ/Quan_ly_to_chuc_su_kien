import { Type } from "class-transformer"
import { IsEmail, IsMongoId, IsNotEmpty, IsNotEmptyObject, IsObject, ValidateNested } from "class-validator"
import mongoose from "mongoose"

export class CreateUserDto {
    @IsEmail({}, { message: "Không phải định dạng email" })
    email!: string

    @IsNotEmpty({ message: "Password không được để trống" })
    password!: string

    name!: string

    phoneNumber?: string

    role!: string

}