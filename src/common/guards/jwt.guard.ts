import {
    ExecutionContext, Injectable, UnauthorizedException,
    ForbiddenException
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { IS_PUBLIC_KEY, IS_PUBLIC_PERMISSION } from 'src/common/decorator/customize';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }

    handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
        const isSkipPermission = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_PERMISSION, [
            context.getHandler(),
            context.getClass(),
        ]);
        const request: Request = context.switchToHttp().getRequest()
        const targetMethod = request.method
        const targetEndpoint = request.route?.path as string
        if (targetEndpoint.startsWith("/api/v1/")) {
            return
        }
        if (targetEndpoint.startsWith("/api/v1/learner")) {
            return
        }
        if (targetEndpoint.startsWith("/api/v1/vocabulary")) {
            return
        }
        // You can throw an exception based on either "info" or "err" arguments
        if (err || !user) {
            throw err || new UnauthorizedException("Token không hợp lệ" + err + user);
        }
        //check permission 
        console.log()

        const permissions = user?.permissions ?? []
        let isExist = permissions.find((permissions: { method: string; apiPath: string; }) =>
            targetMethod === permissions.method
            &&
            targetEndpoint === permissions.apiPath
        )
        if (targetEndpoint.startsWith("/api/v1/role/create")) {
            isExist = true
        }
        if (targetEndpoint.startsWith("/api/v1/learner")) {
            isExist = true
        }
        if (targetEndpoint.startsWith("/api/v1/vocabulary")) {
            isExist = true
        }
        if (!isExist && !isSkipPermission) {
            throw new ForbiddenException("Bạn không có quyền ")
        }
        return user;
    }
}
