import React, { useState } from 'react';
import { Button, TextInfo } from '../../atoms';
import { Board } from '../../molecules';
import { SectionStyled } from './styled';

interface ClickedElement extends EventTarget {
  id?: string;
}

export const Game: React.FC = () => {
  const initialBoardState = new Array(9).fill('');

  const [boardState, setBoardState] = useState(initialBoardState);

  const [player1IsPlaying, setPlayer1IsPlaying] = useState(true);

  function _handleResetButton() {
    setBoardState(initialBoardState);
    setPlayer1IsPlaying(true);
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

  const winner = _getWInner(boardState);

  function _isBoardFull(boardState: string[]) {
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === '') {
        return false;
      }
    }
    return true;
  }

  function _getCurrentResult() {
    let currentResult;
    if (winner) {
      currentResult = 'Winner: ' + winner;
    } else if (_isBoardFull(boardState)) {
      currentResult = 'It is a draw!';
    } else {
      currentResult = `Player ${player1IsPlaying ? 1 : 2} plays`;
    }
    return currentResult;
  }

  function _tileIsFull(index: number) {
    return boardState[index] !== '';
  }

  function _handleClickTile(event: React.UIEvent<HTMLButtonElement | HTMLDivElement>) {
    const clickedEl: ClickedElement = event.nativeEvent.composedPath()[0];
    const index = Number(clickedEl.id);
    if (_tileIsFull(index) || winner) {
      return;
    }
    const nextBoardState = boardState.slice();
    nextBoardState[index] = player1IsPlaying ? 'O' : 'X';
    setBoardState(nextBoardState);
    setPlayer1IsPlaying(!player1IsPlaying);
  }

  return (
    <React.Fragment>
      <SectionStyled>
        <TextInfo value={_getCurrentResult()}></TextInfo>
        <Board tiles={boardState} handleClickTile={_handleClickTile}></Board>
        <Button value="Reset" handleOnClick={_handleResetButton}></Button>
      </SectionStyled>
    </React.Fragment>
  );
};