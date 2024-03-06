// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { AuthService } from 'src/auth/auth.service';

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//     constructor(private readonly authService: AuthService) { }

//     use(req: Request, res: Response, next: Function) {
//         const user = req.body.user;
//         const response = res;
//         this.authService.login(user, response).then(() => {
//             next();
//         }).catch((error) => {
//             console.error(error);
//             res.status(401).send('Unauthorized');
//         });
//     }
// }