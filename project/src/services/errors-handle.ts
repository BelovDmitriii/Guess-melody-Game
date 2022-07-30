import request from 'axios';
import { store } from '../store';
import { ErrorType } from '../types/error';
import { setError } from '../store/action';
import { clearErrorAction } from '../store/api-actions';

export const errorsHandle = (error: ErrorType) => {
  if(!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };
};
