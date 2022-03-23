import { useState, useRef, useEffect } from 'react';
import { GameState, Player } from './logic/connect4.types';
import { checkWin, createBoard, playColumn } from './logic/connect4.utils';
import { MinMax } from './logic/min-max';

export function useConnect4() {
  const boardRef = useRef(createBoard());
  const ia = useRef(new MinMax(4));
  const [isHumanTurn, setIsHumanTurn] = useState(true);
  const [gameState, setGameState] = useState<GameState>(GameState.PLAYING);

  useEffect(() => {
    if (!isHumanTurn && gameState === GameState.PLAYING) {
      const IAMove = ia.current.getNextMove(boardRef.current) as number;
      boardRef.current = playColumn(IAMove, Player.IA, boardRef.current);
      setGameState(checkWin(boardRef.current));
      setIsHumanTurn(true);
    }
  }, [isHumanTurn, gameState]);

  function newGame() {
    boardRef.current = createBoard();
    setIsHumanTurn(true);
    setGameState(GameState.PLAYING);
  }

  function checkMoveLegal(column: number) {
    if (boardRef.current[column][5] === 0) {
      return true;
    }
  }

  function play(column: number) {
    if (gameState !== GameState.PLAYING) {
      newGame();
    } else if (isHumanTurn && checkMoveLegal(column)) {
      setIsHumanTurn(false);
      boardRef.current = playColumn(column, Player.HUMAN, boardRef.current);
      setGameState(checkWin(boardRef.current));
    }
  }

  return {
    newGame,
    play,
    isHumanTurn,
    gameState,
    board: boardRef.current,
  };
}
