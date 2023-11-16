import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { UserRole } from "../constants/roles.enum";
import { JwtGuard } from "src/common/guards/jwt.guard";
import { RolesGuard } from "src/common/guards/role.guard";

export function Auth(...roles: UserRole[]) {
    return applyDecorators(
        SetMetadata("roles", roles),
        UseGuards(JwtGuard, RolesGuard),
    );
}