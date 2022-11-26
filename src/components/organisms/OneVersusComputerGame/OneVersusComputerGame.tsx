import React, { useState } from 'react';
import { Button, Span, Tile } from '../../atoms';
import { BoardStyled, SectionStyled } from './styled';

// eslint-disable-next-line no-unused-vars
enum GameResult {
  // eslint-disable-next-line no-unused-vars
  win= 'win', draw= 'draw', lost = 'lost'
}

interface Game {
  result: GameResult,
  date: Date,
}

interface GamesHistoric {
  games: Array<Game>
}

interface Action {
  type: string
}

Storage.prototype.setObject = function(key: string, object: unknown) {
  return this.setItem(key, JSON.stringify(object));
};

Storage.prototype.getObject = function(key: string) {
  const objectInJson = this.getItem(key) || '';
  if (objectInJson === '') {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const object = JSON.parse(objectInJson);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return object;
};

const localStorageKey = 'gamesHistoric';

function gamesHistoricReducer(state: Game, action: Action): void {
  switch (action.type) {
    case 'add': {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
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

export const OneVersusComputerGame: React.FC = () => {
  const initialBoardState = new Array(9).fill('');

  const [boardState, setBoardState] = useState(initialBoardState);

  const [player1IsPlaying, setPlayer1IsPlaying] = useState(true);

  const token1 = 'X';

  const token2 = 'O';

  const resultInitialState = `You, ${token1}, play`;

  const [resultState, setResultState] = useState(resultInitialState);

  function _handleResetButton() {
    setBoardState(initialBoardState);
    setPlayer1IsPlaying(true);
    setResultState(resultInitialState);
  }

  function _tileIsFull(index: number) {
    return boardState[index] !== '';
  }

  function _hasWon(boardState: string[]) {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        return true;
      }
    }
    return false;
  }

  function _isBoardFull(boardState: string[]) {
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === '') {
        return false;
      }
    }
    return true;
  }

  function computerPlays(boardState: string[]) {
    const newBoardState = [...boardState];
    const random = Math.floor(Math.random() * 9);
    let count = 0;
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === '') {
        if (i === 0 && count === random) {
          newBoardState[i] = token2;
          break;
        }
        count++;
        if (count === random) {
          newBoardState[i] = token2;
          break;
        }
      }
      if (i + 1 === boardState.length && count < random) {
        i = 0;
      }
    }
    return newBoardState;
  }

  function _handleClickTile(index: number) {
    if (_tileIsFull(index) || _hasWon(boardState)) {
      return;
    }
    const boardStateAfterPlayer = boardState.slice();
    boardStateAfterPlayer[index] = player1IsPlaying ? token1 : token2;
    if (_hasWon(boardStateAfterPlayer)) {
      setResultState('You won!');
      setBoardState(boardStateAfterPlayer);
      const game: Game = {
        result: GameResult.win,
        date: new Date()
      };
      gamesHistoricReducer(game, { type: 'add' });
    } else if (_isBoardFull(boardStateAfterPlayer)) {
      setResultState('It is a draw!');
      setBoardState(boardStateAfterPlayer);
      const game: Game = {
        result: GameResult.draw,
        date: new Date()
      };
      gamesHistoricReducer(game, { type: 'add' });
    } else {
      const boardStateAfterComputer = computerPlays(boardStateAfterPlayer);
      if (_hasWon(boardStateAfterComputer)) {
        setResultState('You lost!');
        const game: Game = {
          result: GameResult.lost,
          date: new Date()
        };
        gamesHistoricReducer(game, { type: 'add' });
      }
      setBoardState(boardStateAfterComputer);
    }
  }

  return (
    <React.Fragment>
      <SectionStyled>
        <Span value={resultState} />
        <BoardStyled>
          {_renderBoard(boardState)}
        </BoardStyled>
        <Button value="Reset" handleOnClick={() => _handleResetButton()}></Button>
      </SectionStyled>
    </React.Fragment>
  );

  function _renderBoard(boardState: string[]) {
    return (
      <React.Fragment>
        {boardState.map((element, index) => (
          <Tile
            value={element}
            handleOnClick={() => _handleClickTile(index)}
            key={index}
          />
        ))}
      </React.Fragment>
    );
  }
};
