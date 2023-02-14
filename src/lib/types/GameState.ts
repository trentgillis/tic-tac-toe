import { ValidTokens } from '@/lib/types/ValidTokens';
import { HumanPlayer } from '../utils/HumanPlayer';
import { AIPlayer } from '../utils/AIPlayer';

export type GameState = {
  inProgress: boolean;
  currentPlayer: HumanPlayer | AIPlayer | null;
  winner: HumanPlayer | AIPlayer | null;
  playerX: HumanPlayer | AIPlayer | null;
  playerO: HumanPlayer | AIPlayer | null;
  draws: number;
  board: [ValidTokens | null, ValidTokens | null, ValidTokens | null][];
};
