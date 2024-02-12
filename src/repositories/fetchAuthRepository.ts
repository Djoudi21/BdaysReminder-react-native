import { AuthRepository } from "./interfaces/authRepisotory.ts";
import {
  Credentials,
  LoginUserResponse,
  LoginUserResponseError,
  NewUser,
} from "../types.ts";
import { BACKEND_API_URL } from "@env";

export class FetchAuthRepository implements AuthRepository {
  async login(
    credentials: Credentials
  ): Promise<LoginUserResponse | LoginUserResponseError> {
    const response = await fetch(`${BACKEND_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: credentials,
      }),
    });
    return await response.json();
  }

  register(user: NewUser): Promise<any> {
    return fetch(`${BACKEND_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: user,
      }),
    });
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
