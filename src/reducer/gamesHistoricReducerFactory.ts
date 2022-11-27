import { Game, GameResult } from './gamesHistoricReducerType';

export function gameFactory(gameResult: GameResult): Game {
  return {
    result: gameResult,
    date: new Date()
  };
}
