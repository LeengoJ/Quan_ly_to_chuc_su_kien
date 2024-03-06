import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from "./user.schema";
import { RoleModule } from "src/role/role.module";

@Module({
    imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }]), RoleModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule { }