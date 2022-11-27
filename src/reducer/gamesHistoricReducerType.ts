import { gamesHistoricReducer } from './gamesHistoricReducer';

export enum GameResult {
  // eslint-disable-next-line no-unused-vars
  win, draw, lost
}

export interface Game {
  result: GameResult;
  date: Date;
}

export interface GamesHistoric {
  games: Array<Game>;
}

export interface Action {
  type: string;
}

export type gamesHistoricReducerType = typeof gamesHistoricReducer;
