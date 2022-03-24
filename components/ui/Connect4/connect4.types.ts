export type Connect4Board = number[][];

export enum Player {
  HUMAN = 1,
  IA = 2,
}

export enum GameState {
  PLAYING,
  HUMAN_WON,
  IA_WON,
  TIE,
}
