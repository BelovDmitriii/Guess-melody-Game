import { createAction } from '@reduxjs/toolkit';
import { Question, Questions, UserAnswer } from '../types/question';
import { AppRoute } from '../const';

export const incrementStep = createAction('game/incrementStep');
export const checkUserAnswer = createAction<{question: Question, userAnswer: UserAnswer}>('game/checkUserAnswer');
export const resetGame = createAction('game/resetGame');
export const loadQuestions = createAction<Questions>('data/loadQuestions');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
