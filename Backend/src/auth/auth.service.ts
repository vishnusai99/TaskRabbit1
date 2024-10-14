import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterRequestDto } from './dto/register.dto';
const bcrypt = require('bcrypt');
import { User } from 'src/user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOneBy(email);
    const isMatch: boolean = bcrypt.compareSync(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, email: user.email, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async register(user: RegisterRequestDto): Promise<{ access_token: string }> {
    const existingUser = await this.usersService.findOneBy(user.email);
    if (existingUser) {
      throw new BadRequestException('email already exists');
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser: User = { ...user, password: hashedPassword };
    await this.usersService.create(newUser);
    return this.signIn(newUser.email, newUser.password);
  }
}
