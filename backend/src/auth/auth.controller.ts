import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './decorators';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
@ApiTags('auth')
@ApiBearerAuth('access_token')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @Public()
  @ApiCreatedResponse({})
  signIn(@Body() { email, password }: SignInDto) {
    return this.authService.signIn(email, password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    const userId = req.user.sub;
    return this.authService.getProfile(userId);
  }
}
