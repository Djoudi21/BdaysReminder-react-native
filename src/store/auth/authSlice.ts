import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import { register } from "./use-cases/register.ts";

const initialState = {
  user: {
    name: "name",
    email: "user.email@gmail.com",
    id: 0,
  },
  isLoggedIn: false,
  error: "",
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.error = "";
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.error.message ?? "";
    });
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const selectIsLoggedIn = (state: RootState) => {
  return state.auth.isLoggedIn;
};

export const selectRegisterError = (state: RootState) => {
  return state.auth.error;
};
