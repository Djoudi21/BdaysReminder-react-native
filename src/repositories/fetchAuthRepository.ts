import { AuthRepository } from "./interfaces/authRepisotory.ts";
import { Credentials, NewUser } from "../types.ts";
import { BACKEND_API_URL } from "@env";

export class FetchAuthRepository implements AuthRepository {
  login(credentials: Credentials): Promise<any> {
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
}
