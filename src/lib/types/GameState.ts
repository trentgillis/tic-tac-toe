import { ValidTokens } from '@/lib/types/ValidTokens';
import { PlayerWinPossibilities } from '@/lib/types/PlayerTypes';

export type Player = {
  type: 'player' | 'cpu';
  token: ValidTokens;
};

export type GameState = {
  gameStarted: boolean;
  currentPlayer: ValidTokens;
  winningPlayer: PlayerWinPossibilities;
  playerX: Player | null;
  playerO: Player | null;
  board: [ValidTokens | null, ValidTokens | null, ValidTokens | null][];
};
