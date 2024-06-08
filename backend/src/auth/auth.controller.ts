import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @ApiCreatedResponse({})
  signIn(@Body() { email, password }: SignInDto) {
    return this.authService.signIn(email, password);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth('access_token')
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
