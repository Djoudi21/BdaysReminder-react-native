import { createAppAsyncThunk } from "../../createAppThunk.ts";
import { Credentials } from "../../../types.ts";
import { REQUEST_MESSAGES } from "../../../utils/CONSTANTS.ts";

export const login = createAppAsyncThunk(
  "auth/login",
  async (payload: Credentials, { extra: { authRepository } }) => {
    const res = await authRepository.login(payload);
    if (res.status !== 200) {
      switch (res.status) {
        case 404:
          throw new Error(REQUEST_MESSAGES["404"]);
        case 401:
          throw new Error(REQUEST_MESSAGES["401"]);
        default:
          throw new Error(REQUEST_MESSAGES["500"]);
      }
    }
    return res.json();
  }
);
