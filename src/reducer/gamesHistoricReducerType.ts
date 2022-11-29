import { gamesHistoricReducer } from './gamesHistoricReducer';

export enum GameResult {
  // eslint-disable-next-line no-unused-vars
  win = 'win', draw = 'draw', lost = 'lost'
}

export interface Game {
  result: GameResult;
  date: Date;
}

export interface GameRepository {
  games: Array<Game>;
}

export interface Action {
  type: string;
}

export type gamesHistoricReducerType = typeof gamesHistoricReducer;
