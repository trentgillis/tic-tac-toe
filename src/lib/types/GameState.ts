import { HumanPlayer } from '@/lib/utils/HumanPlayer';
import { AIPlayer } from '@/lib/utils/AIPlayer';
import { Board } from '@/lib/utils/Board';

export type GameState = {
  inProgress: boolean;
  currentPlayer: HumanPlayer | AIPlayer | null;
  winner: HumanPlayer | AIPlayer | null;
  playerX: HumanPlayer | AIPlayer | null;
  playerO: HumanPlayer | AIPlayer | null;
  draws: number;
  board: Board;
};
