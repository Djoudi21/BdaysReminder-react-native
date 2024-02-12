import {
  Credentials,
  LoginUserResponse,
  LoginUserResponseError,
  NewUser,
} from "../../types.ts";

export interface AuthRepository {
  register: (user: NewUser) => Promise<any>;
  login: (
    credentials: Credentials
  ) => Promise<LoginUserResponse | LoginUserResponseError>;
  logout: () => Promise<any>;
}
