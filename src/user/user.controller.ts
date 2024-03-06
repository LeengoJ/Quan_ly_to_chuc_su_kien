import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseInterceptors } from '@nestjs/common';
import { UserDetails } from './user-details.interface';
import { Public, ResponseMessage, UserDecorate } from 'src/common/decorator/customize';
import { CreateInterceptor, TransformInterceptor } from 'src/common/middlewares/transform.interceptor';
import { CreateUserDto } from 'src/common/dtos/user-dto/create-user-dto';
import { IUser } from 'src/common/interface/user.interface';
import { UserDocument } from './user.schema';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Public()
    @Post('create')
    @ResponseMessage("Create a new user")
    @UseInterceptors(CreateInterceptor)
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get('getAll')
    @ResponseMessage("Find all users")
    @UseInterceptors(TransformInterceptor)
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    @ResponseMessage("Get a user")
    @UseInterceptors(TransformInterceptor)
    @Public()
    findOne(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Patch('update')
    @ResponseMessage("Update a user")
    @UseInterceptors(TransformInterceptor)
    update(@Body() updateUserDto: UserDocument, id: string) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    @ResponseMessage("Delete a user")
    @UseInterceptors(TransformInterceptor)
    remove(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
