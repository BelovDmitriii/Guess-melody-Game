import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Questions } from './question';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type GameData = {
  questions: Questions
  isDataLoaded: boolean;
};

export type GameProcess = {
  mistakes: number;
  step: number;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
