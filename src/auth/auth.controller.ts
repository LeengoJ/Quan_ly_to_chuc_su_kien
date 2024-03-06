import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
// import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto';
// import { NewUserDTO } from 'src/user/dtos/new-user.dto';
// import { UserDetails } from 'src/user/user-details.interface';

import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { RoleService } from 'src/role/role.service';
import { Public, ResponseMessage, UserDecorate } from 'src/common/decorator/customize';
import { CreateInterceptor, TransformInterceptor } from 'src/common/middlewares/transform.interceptor';
import { IUser } from 'src/common/interface/user.interface';
import { LocalAuthGuard } from 'src/common/guards/local.guard';
import { UserLoginDto } from 'src/common/dtos/login-dto/login.dto';
import { CreateUserDto } from 'src/common/dtos/user-dto/create-user-dto';


@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private roleService: RoleService
    ) { }

    @Public()
    // @UseGuards(LocalAuthGuard)
    @Post('/login')
    @UseInterceptors(TransformInterceptor)
    @ResponseMessage("Login user")
    handleLogin(
        @Body() User: UserLoginDto,
        @Res({ passthrough: true }) response: Response) {
        return this.authService.login(User, response)
    }

    @Public()
    @ResponseMessage("Register a new user")
    @Post('/register')
    @UseInterceptors(CreateInterceptor)
    handleRegister(@Body() registerUserDto: CreateUserDto) {
        return this.authService.register(registerUserDto)
    }

    // @Get('profile')
    // @UseInterceptors(CreateInterceptor)
    // @ResponseMessage("Register a new user")
    // getProfile(@Req() req): any {
    //     return req.user;
    // }

    @Get('account')
    @ResponseMessage("Get user information")
    @UseInterceptors(TransformInterceptor)
    async getAccountfromHeader(@UserDecorate() user: IUser) {
        const temp = await this.roleService.getById(user.role._id) as any
        user.permissions = temp.permissions
        return { user };
    }

    @Public()
    @Get('refresh')
    @ResponseMessage("Get user information")
    handleRefreshToken(
        @Req() request: Request,
        @Res({ passthrough: true }) response: Response) {
        const refresh_Token = request.cookies['refresh_token']
        return this.authService.processNewToken(refresh_Token, response);
    }

    @ResponseMessage("Logout user")
    @Post('logout')
    @UseInterceptors(TransformInterceptor)
    handleLogout(
        @UserDecorate() user: IUser,
        @Res({ passthrough: true }) response: Response) {
        return this.authService.logout(user, response)
    }
}
