import { AuthRepository } from "./interfaces/authRepisotory.ts";
import { Credentials, NewUser } from "../types.ts";

export class FetchAuthRepository implements AuthRepository {
  login(credentials: Credentials): Promise<any> {
    console.log(credentials);
    return Promise.resolve(undefined);
  }

  register(user: NewUser): Promise<any> {
    const res = fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: user,
      }),
    });
    return Promise.resolve(res);
  }
}
