import { Strategy } from 'passport-jwt';
import { IUser } from '../interfaces/User';
import { RoleService } from 'src/role/role.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private roleService;
    constructor(roleService: RoleService);
    validate(payload: IUser): Promise<{
        id: string;
        name: string;
        email: string;
        role: {
            _id: string;
            name: string;
        };
        permissions: import("../../permission/permission.schema").Permission[];
    }>;
}
export {};
