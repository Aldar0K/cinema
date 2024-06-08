import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);

    // TODO: Implement password hashing
    if (user?.password !== pass) {
      throw new UnauthorizedException({
        message: 'Invalid password',
      });
    }

    const payload = { sub: user.id, email: user.email };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
