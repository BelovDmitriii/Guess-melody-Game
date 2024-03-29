import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { Questions } from '../types/question';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { removeToken, saveToken } from '../services/token';
import { errorsHandle } from '../services/errors-handle';

export const fetchQuestionActions = createAsyncThunk(
  'data/fetchQuestions',
  async () => {
    try {
      const {data} = await api.get<Questions>(APIRoute.Questions);
      return data;
    } catch(error) {
      errorsHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try{
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(redirectToRoute(AppRoute.Result));
    } catch(error) {
      errorsHandle(error);
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try{
      await api.delete(APIRoute.Logout);
      removeToken();
    } catch(error) {
      errorsHandle(error);
    }
  },
);
