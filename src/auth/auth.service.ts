// import { ExistingUserDTO } from './../user/dtos/existing-user.dto';
// import { UserDetails } from './../user/user-details.interface';
// import { Injectable, HttpStatus, HttpException } from '@nestjs/common';

// import * as bcrypt from 'bcrypt';
// import { NewUserDTO } from 'src/user/dtos/new-user.dto';

// import { UserService } from './../user/user.service';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthService {
//     constructor(
//         private userService: UserService,
//         private jwtService: JwtService,
//     ) { }

//     async hashPassword(password: string): Promise<string> {
//         console.log("Đã chạy được vào đây 2")
//         return bcrypt.hash(password, 1);
//     }
//     async register(user: Readonly<NewUserDTO>): Promise<UserDetails | any> {
//         const { phoneNumber, name, email, password } = user;
//         const existingUser = await this.userService.findByEmail(email);
//         if (existingUser)
//             throw new HttpException(
//                 'An account with that email already exists!',
//                 HttpStatus.CONFLICT,
//             );
//         console.log("Đã chạy được vào đây 1")
//         const hashedPassword = await this.hashPassword(password);

//         const newUser = await this.userService.create(phoneNumber, name, email, hashedPassword);
//         return this.userService._getUserDetails(newUser);
//     }

//     async doesPasswordMatch(
//         password: string,
//         hashedPassword: string,
//     ): Promise<boolean> {
//         return bcrypt.compare(password, hashedPassword);
//     }

//     async validateUser(
//         email: string,
//         password: string,
//     ): Promise<UserDetails | null> {
//         const user = await this.userService.findByEmail(email);
//         const doesUserExist = !!user;

//         if (!doesUserExist) return null;

//         const doesPasswordMatch = await this.doesPasswordMatch(
//             password,
//             user.password,
//         );

//         if (!doesPasswordMatch) return null;

//         return this.userService._getUserDetails(user);
//     }

//     async login(
//         existingUser: ExistingUserDTO,
//     ): Promise<{ token: string } | null> {
//         const { email, password } = existingUser;
//         const user = await this.validateUser(email, password);

//         if (!user)
//             throw new HttpException('Credentials invalid!', HttpStatus.UNAUTHORIZED);

//         const jwt = await this.jwtService.signAsync({ user });
//         return { token: jwt };
//     }

//     async verifyJwt(jwt: string): Promise<{ exp: number }> {
//         try {
//             const { exp } = await this.jwtService.verifyAsync(jwt);
//             return { exp };
//         } catch (error) {
//             throw new HttpException('Invalid JWT', HttpStatus.UNAUTHORIZED);
//         }
//     }
// }
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';
import { RoleService } from 'src/role/role.service';
import { IUser } from 'src/common/interface/user.interface';
import { JWT_REFRESH_TOKEN_EXPIRED, JWT_REFRESH_TOKEN_SECRET } from 'src/common/config/env';
import { UserLoginDto } from 'src/common/dtos/login-dto/login.dto';
import { compare, genSaltSync, hashSync } from 'bcrypt';
import { CreateUserDto } from './../common/dtos/user-dto/create-user-dto';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,

    private roleService: RoleService,
    // @InjectModel(User.name)
    // private userModel: SoftDeleteModel<UserDocument>
  ) { }

  //username/ pass là 2 tham số thư viện passport nó ném về
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const isValid = this.usersService.isValidPassword(pass, user.password);
      if (isValid) {
        const userRole = user.role as unknown as { _id: string; name: string }
        const temp = await this.roleService.getById(userRole._id)
        const objUser = {
          ...user.toObject(),
          permissions: temp?.permissions ?? []
        }
        return objUser;
      } else {
        return null;
      }
    }

  }
  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  }
  async login(userinf: UserLoginDto, response: Response) {

    const user = await this.usersService.findByEmail(userinf.email);
    console.log(user);
    if (user) {
      const isMatch = await compare(userinf.password, user?.password)
      if (!isMatch) {
        throw new UnauthorizedException();
      }

      const { id, name, email, role, permissions } = user;
      const payload = {
        sub: "token login",
        iss: "from server",
        id,
        name,
        email,
        role,
        permissions
      };
      const refresh_token = this.getRefresh_token(payload)
      await this.usersService.updateRefresh_Token(id, refresh_token)
      response.cookie('refresh_token', refresh_token, {
        httpOnly: true,
        maxAge: 36000
      })
      return {
        access_token: this.jwtService.sign(payload),
        user: user

      };
    } else return null
  }

  async register(User: CreateUserDto) {

    const user = await this.usersService.register(User)
    return user;
  }
  getRefresh_token = (payload: any) => {
    return this.jwtService.sign(payload, {
      secret: JWT_REFRESH_TOKEN_SECRET,
      expiresIn: JWT_REFRESH_TOKEN_EXPIRED
    })
  }
  processNewToken = async (refresh_Token: string, response: Response) => {
    try {
      this.jwtService.verify(refresh_Token, {
        secret: JWT_REFRESH_TOKEN_SECRET
      })
      const user = await this.usersService.findUserByToken(refresh_Token)
      if (user) {
        const id = user?.id;
        const name = user?.name;
        const email = user?.email;
        const role = user?.role
        const payload = {
          sub: "token login",
          iss: "from server",
          id,
          name,
          email,
          role
        };
        const refresh_token = this.getRefresh_token(payload)
        await this.usersService.updateRefresh_Token(id, refresh_token)
        const userRole = user.role as unknown as { _id: string; name: string }
        const temp = await this.roleService.getById(userRole._id)
        response.clearCookie("refresh_token")
        response.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          maxAge: 36000
        })
        return {
          access_token: this.jwtService.sign(payload),
          user: {
            id,
            name,
            email,
            role,
            permissions: temp?.permissions ?? []
          }
        };
      }
    } catch (error) {
      throw new BadRequestException("Refresh token không hợp lệ . Vui lòng đăng nhập lại")
    }
  }
  logout = async (user: IUser, response: Response) => {
    this.usersService.updateRefresh_Token(user.id, "")
    response.clearCookie("refresh_token")
    return "Ok"
  }
}