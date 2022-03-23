import React from 'react';
import styles from './Connect4.module.css';
import { GameState, Player } from './logic/connect4.types';
import { useConnect4 } from './useConnect4';

export function Connect4() {
  const { play, gameState, board } = useConnect4();

  const columnIndices = [0, 1, 2, 3, 4, 5, 6];
  const rowIndices = [5, 4, 3, 2, 1, 0];

  const getInnerCaseClassName = (columnIndex: number, rowIndex: number) => {
    switch (board[columnIndex][rowIndex]) {
      case Player.HUMAN:
        return styles.rouge;
      case Player.IA:
        return styles.jaune;
      default:
        return styles.vide;
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <table>
          <thead>
            <tr className={styles.selector}>
              {columnIndices.map((columnIndex) => (
                <th
                  key={`selector-${columnIndex}`}
                  className={styles.case}
                  onClick={() => play(columnIndex)}
                ></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowIndices.map((rowIndex) => {
              return (
                <tr key={`row-${rowIndex}`}>
                  {columnIndices.map((columnIndex) => (
                    <td
                      key={`case-${columnIndex}${rowIndex}`}
                      className={styles.case}
                    >
                      <div
                        className={`${styles.innerCase} ${getInnerCaseClassName(
                          columnIndex,
                          rowIndex
                        )}`}
                      ></div>
                    </td>
                  ))}
                </tr>
              );
            })}
            <tr>
              <td>
                <div className={styles.pied}></div>
              </td>
              <td>
                <div></div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className={styles.pied}></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.info}>
        <div>
          {gameState === GameState.HUMAN_WON && <p>Nice one!</p>}
          {gameState === GameState.IA_WON && <p>IA won this time...</p>}
          {gameState === GameState.TIE && <p>Draw game</p>}
        </div>
      </div>
    </div>
  );
}
