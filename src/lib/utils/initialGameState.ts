import { GameState } from '../types/GameState';

export const initialGameState: GameState = {
  inProgress: false,
  currentPlayer: null,
  winner: null,
  draws: 0,
  playerX: null,
  playerO: null,
  board: Array(3)
    .fill(null)
    .map(() => [null, null, null]),
};
