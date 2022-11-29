import React from 'react';
import { GameRepository } from '../../../reducer/gamesHistoricReducerType';
import { gamesHistoricReducer } from '../../../reducer/gamesHistoricReducer';

export const GamesHistoric: React.FC = () => {
  const gamesHistoric: GameRepository = gamesHistoricReducer(undefined, {
    type: 'get'
  });

  return (
    <React.Fragment>
      <section>
        <dl>
          {gamesHistoric && gamesHistoric.games
            ? gamesHistoric.games.map((e, index) => (
              <React.Fragment key={index}>
                <dt>{e.result}</dt>
                <dd>{e.date.toString()}</dd>
              </React.Fragment>
            ))
            : 'No games played yet'}
        </dl>
      </section>
    </React.Fragment>
  );
};
