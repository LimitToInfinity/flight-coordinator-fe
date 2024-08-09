import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginSuccess } from '../Authenticated/authenticatedSlice';

import { noAuthFetch } from '../../../utilities/functions';
import { urls } from '../../../utilities/urls';

export const attemptLogin = createAsyncThunk(
  'admin/login',
  async ({ username, password, navigate }, thunkAPI) => {
    const userBody = JSON.stringify({ username, password });

    try {
      const { token } = await noAuthFetch(urls.login, 'POST', userBody);
      if (token) {
        localStorage.setItem('token', token);
        thunkAPI.dispatch(loginSuccess());
        navigate('/choose');
      }
      return { token };
    } catch(error) {
      console.error(`Error logging in: ${error.message}`);
      return { token: '', error: error.message };
    }
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: ''
  },
  reducers: {
    storeValidToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = '';
    }
  },
  extraReducers: builder => {
    builder.addCase(
      attemptLogin.fulfilled,
      (_, action) => action.payload
    );
  }
});

export const loginInfo = state => state.login;

export const { storeValidToken, removeToken } = loginSlice.actions;

export default loginSlice.reducer;