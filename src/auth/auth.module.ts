import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from 'src/user/user.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JwtStrategy } from 'src/common/guards/jwt.strategy';
import { IpBlockService } from 'src/ip-block/ip-block.service';
import { ipBlockSchema } from 'src/ip-block/ip-block.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { IpBlockModule } from 'src/ip-block/ip-block.module';

@Module({
    imports: [
        UserModule,
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: 'secret',
                signOptions: { expiresIn: '3600s' },
            }),
        }), IpBlockModule
        // This code is using the JwtModule from the`@nestjs/jwt` 
        //package to enable JSON Web Token(JWT) authentication 
        //in a NestJS application.The`JwtModule.registerAsync()` 
        //method is used to asynchronously register the JWT 
        //configuration options.The`useFactory` property is a 
        //function that returns an object containing the JWT 
        //secret and sign options.In this case, the secret 
        //is set to 'secret' and the sign options specify that 
        //the token should expire after 3600 seconds(1 hour).

    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],

})
export class AuthModule { }