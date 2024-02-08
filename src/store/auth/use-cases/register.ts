import { createAppAsyncThunk } from "../../createAppThunk.ts";
import { NewUser } from "../../../types.ts";

export const register = createAppAsyncThunk(
  "auth/register",
  async (payload: NewUser, { extra: { authRepository } }) => {
    try {
      return await authRepository.register(payload);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);
