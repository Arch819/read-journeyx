import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../api';
import {
  ICredentialsPayload,
  IRefreshTokenPayload,
  ISignOutPayload,
} from '../api/authApi';
import { RootState } from '../store';
const { getCurrent, refresh, signIn, signOut, signUp } = client.authApi;

export type ICredentials = {
  name?: string | undefined;
  email: string;
  password: string;
};

//review
export const getCurrentThunk = createAsyncThunk<
  ICredentialsPayload,
  undefined,
  {
    rejectValue: string;
    state: RootState;
  }
>('auth/getCurrent', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    return await getCurrent(persistedToken);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

//review
export const getRefreshThunk = createAsyncThunk<
  IRefreshTokenPayload,
  undefined,
  {
    rejectValue: string;
    state: RootState;
  }
>('auth/getRefresh', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    return await refresh(persistedToken);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const signInThunk = createAsyncThunk<
  ICredentialsPayload,
  ICredentials,
  { rejectValue: string }
>('auth/signIn', async (credentials, { rejectWithValue }) => {
  try {
    return await signIn(credentials);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const signUpThunk = createAsyncThunk<
  ICredentialsPayload,
  ICredentials,
  { rejectValue: string }
>('auth/signUp', async (credentials, { rejectWithValue }) => {
  try {
    return await signUp(credentials);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
export const signOutThunk = createAsyncThunk<
  ISignOutPayload,
  undefined,
  { rejectValue: string }
>('auth/signOut', async (_, { rejectWithValue }) => {
  try {
    return await signOut();
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
