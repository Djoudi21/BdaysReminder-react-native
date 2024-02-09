import { Credentials, NewUser } from "../../types.ts";

export interface AuthRepository {
  register: (user: NewUser) => Promise<any>;
  login: (credentials: Credentials) => Promise<any>;
  logout: () => Promise<any>;
}
