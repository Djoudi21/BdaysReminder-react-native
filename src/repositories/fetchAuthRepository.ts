import { AuthRepository } from "./interfaces/authRepisotory.ts";

import { BACKEND_API_URL } from "@env";
import {
  NewUser,
  RegisterUserResponse,
  RegisterUserResponseError,
} from "../store/auth/use-cases/register/types.ts";
import { Credentials } from "../store/auth/use-cases/login/types.ts";

export class FetchAuthRepository implements AuthRepository {
  async login(credentials: Credentials): Promise<any> {
    return fetch(`${BACKEND_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: credentials,
      }),
    });
  }

  async register(
    user: NewUser
  ): Promise<RegisterUserResponse | RegisterUserResponseError> {
    const response = await fetch(`${BACKEND_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: user,
      }),
    });
    return await response.json();
  }

  logout(): Promise<any> {
    return fetch(`${BACKEND_API_URL}/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
