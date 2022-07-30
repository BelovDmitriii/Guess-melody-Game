import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createApi } from '../services/api';

export const store = configureStore({reducer});
export const api = createApi();
