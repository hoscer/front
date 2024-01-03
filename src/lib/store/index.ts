import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '@/lib/store/features/counter/counterSlice';
import authReducer from '@/lib/store/features/user/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
