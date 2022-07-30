import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Questions } from '../types/question';
import { loadQuestions, requireAuthorization } from './action';
import { APIRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { removeToken, saveToken } from '../services/token';

export const fetchQuestionActions = createAsyncThunk(
  'data/fetchQuestions',
  async () => {
    const {data} = await api.get<Questions>(APIRoute.Questions);
    store.dispatch(loadQuestions(data));
  },
);

export const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    removeToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
