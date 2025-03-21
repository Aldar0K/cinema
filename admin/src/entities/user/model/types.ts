export type UserEntity = {
  id: number;
  email: string;
};

export type GetUsersResponse = UserEntity[];

export type GetUserDto = {
  userId: number;
};

export type GetUserResponse = UserEntity;

export type CreateUserDto = {
  body: {
    email: string;
    password: string;
  };
};

export type CreateUserResponse = UserEntity;

export type UpdateUserDto = {
  userId: number;
  body: {
    email?: string;
    password?: string;
  };
};

export type UpdateUserResponse = UserEntity;

export type DeleteUserDto = {
  userId: number;
};

export type DeleteUserResponse = void;
