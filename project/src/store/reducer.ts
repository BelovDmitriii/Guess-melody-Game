import { createReducer } from '@reduxjs/toolkit';
import { incrementStep, checkUserAnswer, resetGame, loadQuestions, requireAuthorization } from './action';
import { isAnswerCorrect } from '../game';
import { AuthorizationStatus, FIRST_GAME_STEP } from '../const';
import { Questions } from '../types/question';

const STEP_COUNT = 1;

type InitialState = {
  mistakes: number,
  step: number,
  questions: Questions,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

const initialState: InitialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
  questions: [],
  authorizationStatus: AuthorizationStatus.NoAuth,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementStep, (state) => {
      state.step = state.step + STEP_COUNT;
    })
    .addCase(checkUserAnswer, (state, action) => {
      const{question, userAnswer} = action.payload;

      state.mistakes += Number(!isAnswerCorrect(question,userAnswer));
    })
    .addCase(resetGame, (state) => {
      state.mistakes = 0;
      state.step = FIRST_GAME_STEP;
    })
    .addCase(loadQuestions, (state, action) => {
      state.questions = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
