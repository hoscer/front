import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@/lib/store';
import { login, response } from './authApi';
import { USER_LOGIN } from './actionTypes';
import { stat } from 'fs';

export interface userLogin {
  token?: String;
  status: 'idle' | 'loading' | 'failed';
  message?: String
}

export interface payload { username:string, password: string }

const initialState: userLogin = {
  token: '',
  status: 'idle',
  message: ''
};

export const signin = createAsyncThunk(
  USER_LOGIN,
  async (data: payload) => {
    const response = await login(data);
    return response;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout: (state) => {
      state.token = '';
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signin.fulfilled, (state, action) => {
        let payload = action.payload as response
        state.status = 'idle';
        state.message = payload.message
        if(payload.status == 200) {
          state.token = 'asd23asds'
        }
      })
      .addCase(signin.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { signout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
