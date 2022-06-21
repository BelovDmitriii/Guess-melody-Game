export const FIRST_GAME_STEP = 0;

export enum AppRoute {
  Login = '/login',
  Result = '/result',
  Lose = '/lose',
  Root = '/',
  Game = '/game'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum GameType {
  Artist = 'artist',
  Genre = 'genre',
}
