import React, { useState } from 'react';
import styles from './Connect4.module.scss';
import { GameState } from './connect4.types';
import { Token } from './Token/Token';
import { useConnect4 } from './useConnect4';

interface IProps {
  onPlayed?: (gameState: GameState) => void;
  iaDifficulty?: number;
}

export function Connect4({ onPlayed, iaDifficulty = 4 }: IProps) {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const { play, gameState, board, isHumanTurn } = useConnect4(iaDifficulty);

  const columnIndices = [0, 1, 2, 3, 4, 5, 6];
  const rowIndices = [5, 4, 3, 2, 1, 0];

  const previewNextMove = (columnIndex: number, rowIndex: number) => {
    if (
      hoveredColumn !== columnIndex ||
      !isHumanTurn ||
      gameState !== GameState.PLAYING
    ) {
      return;
    }

    return (
      board[columnIndex][rowIndex] === 0 &&
      (rowIndex === 0 ||
        board[columnIndex][rowIndex - 1] === 1 ||
        board[columnIndex][rowIndex - 1] === 2)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <div className={styles.board}>
          {rowIndices.map((rowIndex) => {
            return (
              <div className={styles.row} key={`row-${rowIndex}`}>
                {columnIndices.map((columnIndex) => (
                  <div
                    key={`case-${columnIndex}${rowIndex}`}
                    className={styles.case}
                    onMouseEnter={() => setHoveredColumn(columnIndex)}
                    onMouseLeave={() => setHoveredColumn(null)}
                    onClick={() => {
                      play(columnIndex);
                      if (onPlayed) {
                        onPlayed(gameState);
                      }
                    }}
                  >
                    <div className={styles.innerCase}>
                      {board[columnIndex][rowIndex] !== 0 && (
                        <Token player={board[columnIndex][rowIndex]} />
                      )}
                      {previewNextMove(columnIndex, rowIndex) && (
                        <Token player={1} isPreview={true} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <div className={styles.boardBottom}>
          <div className={styles.foot}></div>
          <div className={styles.foot}></div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.innerInfo}>
          {gameState === GameState.HUMAN_WON && <p>Nice one!</p>}
          {gameState === GameState.IA_WON && <p>IA won this time...</p>}
          {gameState === GameState.TIE && <p>Draw game</p>}
        </div>
      </div>
    </div>
  );
}
