export type RegisterUserResponse = {
  data: {
    message: string;
    status: "success" | "error";
    user: User;
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
