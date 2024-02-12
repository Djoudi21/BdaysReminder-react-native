import { createAppAsyncThunk } from "../../../createAppThunk.ts";
import { REQUEST_MESSAGES } from "../../../../utils/CONSTANTS.ts";
import {
  Credentials,
  LoginUserResponse,
  LoginUserResponseError,
} from "./types.ts";

export const login = createAppAsyncThunk(
  "auth/login",
  async (
    payload: Credentials,
    { extra: { authRepository } }
  ): Promise<LoginUserResponse | LoginUserResponseError> => {
    const res = await authRepository.login(payload);
    if (res.data.status !== 200) {
      switch (res.data.status) {
        case 404:
          throw new Error(REQUEST_MESSAGES["404"]);
        case 401:
          throw new Error(REQUEST_MESSAGES["401"]);
        default:
          throw new Error(REQUEST_MESSAGES["500"]);
      }
    }
    return res;
  }
);
