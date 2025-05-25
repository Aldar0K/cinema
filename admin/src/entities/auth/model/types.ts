import { UserEntity } from "@/entities/user";

export interface AuthSchema {
  user: UserEntity;
}

export type LoginDto = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: UserEntity;
  success: boolean;
};

// the code below is not used
export type RefreshTokenDto = {
  refreshToken: string;
};

export type RefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RegistrationDto = {
  name: string;
  email: string;
  password: string;
};

export type RegistrationResponse = {
  user: UserEntity;
  success: boolean;
};

export type GoogleLoginDto = {
  token: string;
};

export type InitiateResetPasswordDto = { email: string };

export type ConfirmResetPasswordDto = { token: string; newPassword: string };

export type ConfirmResetPasswordResponse = LoginResponse;

export type GoogleLoginResponse = LoginResponse;

export type ChangePasswordDto = {
  password: string;
  newPassword: string;
};
