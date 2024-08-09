import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { removeToken, storeValidToken } from '../Login/loginSlice';

import { authFetch } from '../../../utilities/functions';
import { urls } from '../../../utilities/urls';

export const attemptAuthentication = createAsyncThunk(
  'admin/authentication',
  async ({ token: previousToken, navigate }, thunkAPI) => {
    if (previousToken) {
      try {
        const { token, error } = await authFetch(urls.authenticate);
        if (token) {
          localStorage.setItem('token', token);
          thunkAPI.dispatch(storeValidToken(token));

          navigate('/choose');
          return { isAuthenticated: true, isLoading: false, error };
        } else if (error) {
          localStorage.removeItem('token');
          thunkAPI.dispatch(removeToken());
          throw new Error(error);
        }
      } catch(error) {
        console.error(`Error logging in: ${error.message}`);

        navigate('/login');
        return { isAuthenticated: false, isLoading: false, error: error.message };
      }
    } else {
      navigate('/login');
      return { isAuthenticated: false, isLoading: false }
    }
  }
);

export const authenticatedSlice = createSlice({
  name: 'authenticated',
  initialState: {
    isLoading: true,
    isAuthenticated: false
  },
  reducers: {
    loginSuccess(state) {
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    logoutConfirmed(state) {
      state.isAuthenticated = false;
      state.isLoading = false;
    }
  },
  extraReducers: builder => {
    builder.addCase(
      attemptAuthentication.fulfilled,
      (_, action) => action.payload
    );
  }
});

export const authenticated = state => state.authenticated;

export const { loginSuccess, logoutConfirmed } = authenticatedSlice.actions;

export default authenticatedSlice.reducer;