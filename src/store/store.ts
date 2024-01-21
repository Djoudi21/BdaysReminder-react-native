import {
  Action,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import {authSlice} from './auth/authSlice.ts';

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const createAppStore = (
  preloadedState?: Partial<ReturnType<typeof rootReducer>>,
) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {},
        },
        serializableCheck: {
          ignoredActions: [],
        },
        preloadedState,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, {}, Action>;
export type AppStore = ReturnType<typeof createAppStore>;
