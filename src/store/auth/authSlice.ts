import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store.ts';

const initialState = {
  user: {
    name: 'name',
    email: 'user.email@gmail.com',
    id: 0,
  },
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const selectIsLoggedIn = (state: RootState) => {
  return state.auth.isLoggedIn;
};
