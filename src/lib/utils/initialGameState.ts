import { GameState } from '@/lib/types/GameState';
import { Board } from '@/lib/utils/Board';

export const initialGameState: GameState = {
  inProgress: false,
  currentPlayer: null,
  winner: null,
  draws: 0,
  playerX: null,
  playerO: null,
  board: new Board(),
};
