import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { roundsOfHashing } from './constants';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async signUp({ email, password }: SignUpDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await hash(password, roundsOfHashing);

    const createdUser = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const payload = { sub: createdUser.id, email: createdUser.email };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }

  async signIn({
    email,
    password,
  }: SignInDto): Promise<{ access_token: string }> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException({
        message: 'User not found',
      });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
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

  async getProfile(userId: number) {
    return userId;
  }
}
