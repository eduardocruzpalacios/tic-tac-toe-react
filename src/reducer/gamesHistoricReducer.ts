import { Action, Game, GamesHistoric } from './gamesHistoricReducerType';

Storage.prototype.setObject = function(key: string, object: unknown) {
  return this.setItem(key, JSON.stringify(object));
};

Storage.prototype.getObject = function(key: string) {
  const objectInJson: string | null = this.getItem(key);
  if (!objectInJson) {
    return null;
  }
  const object: unknown = JSON.parse(objectInJson);
  return object;
};

const localStorageKey = 'gamesHistoric';

export function gamesHistoricReducer(state: Game, action: Action): void {
  switch (action.type) {
    case 'add': {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
      let gamesHistoric: GamesHistoric = localStorage.getObject(localStorageKey);
      if (!gamesHistoric) {
        gamesHistoric = {
          games: []
        };
      }
      gamesHistoric.games.push(state);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      localStorage.setObject(localStorageKey, gamesHistoric);
      break;
    }
    default:
      throw new Error();
  }
}
