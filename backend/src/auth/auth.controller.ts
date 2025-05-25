import { Body, Controller, Get, Post, Request, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { Public } from './decorators';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
@ApiTags('auth')
@ApiBearerAuth('access_token')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @Public()
  @ApiCreatedResponse({})
  async signUp(
    @Body() signUpDto: SignUpDto,
    @Res({ passthrough: true }) response,
  ) {
    const { access_token, user } = await this.authService.signUp(signUpDto);

    response.cookie('access_token', access_token, {
      httpOnly: true,
      secure: true,
    });

    const { password, ...userWithoutPassword } = user; // eslint-disable-line @typescript-eslint/no-unused-vars

    return { user: userWithoutPassword, success: true };
  }

  @Post('sign-in')
  @Public()
  @ApiCreatedResponse({})
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) response,
  ) {
    const { access_token, user } = await this.authService.signIn(signInDto);

    response.cookie('access_token', access_token, {
      httpOnly: true,
      secure: true,
    });

    const { password, ...userWithoutPassword } = user; // eslint-disable-line @typescript-eslint/no-unused-vars

    return { user: userWithoutPassword, success: true };
  }

  @Get('profile')
  getProfile(@Request() req) {
    const userId = req.user.sub;
    return this.authService.getProfile(userId);
  }
}
