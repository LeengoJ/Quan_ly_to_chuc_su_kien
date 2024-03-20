"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const helmet_1 = require("helmet");
const jwt_guard_1 = require("./common/guards/jwt.guard");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalGuards(new jwt_guard_1.JwtAuthGuard(reflector));
    app.setGlobalPrefix('api');
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: ['1'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        "origin": true,
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        credentials: true
    });
    app.use(cookieParser());
    app.use((0, helmet_1.default)());
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map