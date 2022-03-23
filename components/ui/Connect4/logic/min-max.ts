import { Connect4Board, GameState, Player } from './connect4.types';
import { isMoveLegal, playColumn, checkWin } from './connect4.utils';

export class MinMax {
  constructor(private depth: number) {}

  getMinMaxScore(board: Connect4Board, depth: number) {
    const gameState = checkWin(board);
    if (gameState === GameState.HUMAN_WON) {
      return -depth;
    } else if (gameState === GameState.IA_WON) {
      return depth;
    } else if (gameState === GameState.TIE || depth <= 0) {
      return 0;
    }
  }

  getNextMove(board: Connect4Board): unknown {
    let moveToPlay;
    let bestMax = -Infinity;
    board.forEach((col, index: number) => {
      if (isMoveLegal(index, board)) {
        const newBoard = playColumn(index, Player.IA, board);
        let curMax = this.min(newBoard, this.depth);
        if (curMax > bestMax) {
          bestMax = curMax;
          moveToPlay = index;
        }
      }
    });
    return moveToPlay;
  }

  min(board: Connect4Board, depth: number) {
    const gameState = checkWin(board);
    if (gameState === GameState.HUMAN_WON) {
      return -depth;
    } else if (gameState === GameState.IA_WON) {
      return depth;
    } else if (gameState === GameState.TIE || depth <= 0) {
      return 0;
    }

    let bestMin = Infinity;
    for (let i = 0; i < 7; i++) {
      if (isMoveLegal(i, board)) {
        const newBoard = playColumn(i, Player.HUMAN, board);
        let curMin = this.max(newBoard, depth - 1);
        if (curMin < bestMin) bestMin = curMin;
      }
    }
    return bestMin;
  }

  max(board: Connect4Board, depth: number) {
    const gameState = checkWin(board);
    if (gameState === GameState.HUMAN_WON) {
      return -depth;
    } else if (gameState === GameState.IA_WON) {
      return depth;
    } else if (gameState === GameState.TIE || depth <= 0) {
      return 0;
    }

    let bestMax = -Infinity;
    for (let i = 0; i < 7; i++) {
      if (isMoveLegal(i, board)) {
        const newBoard = playColumn(i, Player.IA, board);
        let curMax = this.min(newBoard, depth - 1);
        if (curMax > bestMax) bestMax = curMax;
      }
    }
    return bestMax;
  }
}
