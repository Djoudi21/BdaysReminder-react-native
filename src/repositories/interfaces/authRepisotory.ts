import {
  NewUser,
  RegisterUserResponse,
  RegisterUserResponseError,
} from "../../store/auth/use-cases/register/types.ts";
import {
  Credentials,
  LoginUserResponse,
  LoginUserResponseError,
} from "../../store/auth/use-cases/login/types.ts";

export interface AuthRepository {
  register: (
    user: NewUser
  ) => Promise<RegisterUserResponse | RegisterUserResponseError>;
  login: (
    credentials: Credentials
  ) => Promise<LoginUserResponse | LoginUserResponseError>;
  logout: () => Promise<any>;
}
