export type RegisterUserResponse = {
  data: {
    message: string;
    status: "success" | "error";
    user: User;
  };
};

export type LoginUserResponse = {
  tokens: {
    accessToken: string;
    refreshTokens: string;
  };
  data: {
    user: {
      email: string;
      id: number;
    };
    status: 200;
  };
};

export type LoginUserResponseError = {
  data: {
    message: string;
    status: 401 | 404;
  };
};

export type Credentials = {
  password: string;
  email: string;
};

export type User = { email: string; id: number };

export type NewUser = {
  email: string;
  password: string;
};
