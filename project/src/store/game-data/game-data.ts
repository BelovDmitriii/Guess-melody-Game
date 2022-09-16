import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { GameData } from '../../types/state';
import { fetchQuestionActions } from '../api-actions';

const initialState: GameData = {
  questions: [],
  isDataLoaded: false,
};

export const gameData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestionActions.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchQuestionActions.fulfilled, (state) => {
        state.isDataLoaded = false;
      });
  },
});
