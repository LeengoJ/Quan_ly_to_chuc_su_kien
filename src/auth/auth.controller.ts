import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { IpBlockService } from 'src/ip-block/ip-block.service';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private ipService: IpBlockService) { }

    @Get()
    getHello(@Req() request: Request) {
        return this.ipService.checkIp(request.ip);
    }
    @Post('register')
    register(@Body() user: NewUserDTO): Promise<UserDetails | null> {
        console.log(user)
        return this.authService.register(user);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() user: ExistingUserDTO): Promise<{ token: string } | null> {
        return this.authService.login(user);
    }

    @Post('verify-jwt')
    @HttpCode(HttpStatus.OK)
    verifyJwt(@Body() payload: { jwt: string }) {
        return this.authService.verifyJwt(payload.jwt);
    }
}
