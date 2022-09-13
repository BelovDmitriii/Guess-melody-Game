export const FIRST_GAME_STEP = 0;
export const MAX_MISTAKES_COUNT = 3;

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

export enum APIRoute {
  Questions = '/questions',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404
}

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Game = 'GAME',
}
