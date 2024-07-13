export interface AuthSchema {
  email?: string;
}

export type LoginDto = {
  email: string;
  password: string;
};

export type LoginResponse = {
  email: string;
  success: boolean;
};

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
  accessToken: string;
  refreshToken: string;
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
