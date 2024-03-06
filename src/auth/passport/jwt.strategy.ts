import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt'
import { IUser } from '../../common/interfaces/User';
import { RoleService } from 'src/role/role.service';
import { JWT_SECRET } from '../../common/config/env';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private roleService: RoleService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET,
        });
    }

    async validate(payload: IUser) {
        const { id, name, email, role } = payload;
        const userRole = role as unknown as { _id: string; name: string }
        const rol = await this.roleService.getById(userRole._id)
        return {
            id,
            name,
            email,
            role,
            permissions: rol?.permissions ?? []
        };
    }
}
