import React, { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { Button, TextInfo, TokenInput } from '../../atoms';
import { Board } from '../../molecules';
import { movesCountReducer } from './movesCountReducer';
import { SectionStyled } from './styled';

interface ClickedElement extends EventTarget {
  id?: string;
}

export const Game: React.FC = () => {
  const initialBoardState = new Array(9).fill('');

  const [boardState, setBoardState] = useState(initialBoardState);

  const [player1IsPlaying, setPlayer1IsPlaying] = useState(true);

  const [seconds, setSeconds] = useState(0);

  const timerText = `Play time: ${seconds}`;

  const [isTimerActive, setIsTimerActive] = useState(true);

  const token1InitialState = 'X';
  const [token1, setToken1] = useState(token1InitialState);

  const token2InitialState = 'O';
  const [token2, setToken2] = useState(token2InitialState);

  function resetTimer() {
    setSeconds(0);
    setIsTimerActive(true);
  }

  function stopTimer() {
    setIsTimerActive(false);
  }

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;
    if (isTimerActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    if (!isTimerActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, seconds]);

  function _handleResetButton() {
    setBoardState(initialBoardState);
    setPlayer1IsPlaying(true);
    setResultState(resultInitialState);
    resetTimer();
    dispatch({ type: 'reset' });
  }

  function _getWInner(boardState: string[]) {
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
        return boardState[a];
      }
    }
    return null;
  }

  function _isBoardFull(boardState: string[]) {
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === '') {
        return false;
      }
    }
    stopTimer();
    return true;
  }

  const resultInitialState = `Player ${token1} plays`;

  const [resultState, setResultState] = useState(resultInitialState);

  function _tileIsFull(index: number) {
    return boardState[index] !== '';
  }

  function _handleClickTile(event: React.UIEvent<HTMLButtonElement | HTMLDivElement>) {
    const clickedEl: ClickedElement = event.nativeEvent.composedPath()[0];
    const index = Number(clickedEl.id);
    if (_tileIsFull(index) || _getWInner(boardState)) {
      return;
    }
    dispatch({ type: 'increment' });
    const nextBoardState = boardState.slice();
    nextBoardState[index] = player1IsPlaying ? token1 : token2;
    setBoardState(nextBoardState);
    const winner = _getWInner(nextBoardState);
    if (winner) {
      stopTimer();
      setResultState(`Winner: ${winner}`);
    } else if (_isBoardFull(nextBoardState)) {
      setResultState('It is a draw!');
    } else {
      setPlayer1IsPlaying(!player1IsPlaying);
      setResultState(`Player ${!player1IsPlaying ? token1 : token2} plays`);
    }
  }

  const movesCountInitialState = { count: 0 };

  const [movesCountState, dispatch] = useReducer(movesCountReducer, movesCountInitialState);

  const movesCountText = `Number of moves: ${movesCountState.count}`;

  function _changeToken1(event: ChangeEvent) {
    const newToken = (event?.target as HTMLInputElement).value;
    const winner = _getWInner(boardState);
    if (newToken !== '' && !winner) {
      const oldToken = token1;
      _updateBoardWithNewToken(newToken, oldToken);
      setToken1(newToken);
      setResultState(`Player ${player1IsPlaying ? newToken : token2} plays`);
    }
  }

  function _changeToken2(event: ChangeEvent) {
    const newToken = (event?.target as HTMLInputElement).value;
    const winner = _getWInner(boardState);
    if (newToken !== '' && !winner) {
      const oldToken = token2;
      _updateBoardWithNewToken(newToken, oldToken);
      setToken2(newToken);
      setResultState(`Player ${player1IsPlaying ? token1 : newToken} plays`);
    }
  }

  function _updateBoardWithNewToken(newToken: string, oldToken: string) {
    const boardStateToUpdate = boardState.slice();
    for (let i = 0; i < boardStateToUpdate.length; i++) {
      if (boardStateToUpdate[i] === oldToken) {
        boardStateToUpdate[i] = newToken;
      }
    }
    setBoardState(boardStateToUpdate);
  }

  return (
    <React.Fragment>
      <SectionStyled>
        <TextInfo value={resultState}></TextInfo>
        <div>
          <TokenInput name='Pj 1:' value={token1} action={(event: ChangeEvent) => _changeToken1(event)} length={1} />
        </div>
        <div>
          <TokenInput name='Pj 2:' value={token2} action={(event: ChangeEvent) => _changeToken2(event)} length={1} />
        </div>
        <Board tiles={boardState} handleClickTile={_handleClickTile}></Board>
        <TextInfo value={timerText} />
        <TextInfo value={movesCountText} />
        <Button value="Reset" handleOnClick={() => _handleResetButton()}></Button>
      </SectionStyled>
    </React.Fragment>
  );
};
