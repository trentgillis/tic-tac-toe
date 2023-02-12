import { ValidTokens } from '@/lib/types/ValidTokens';
import { PlayerWinPossibilities } from '@/lib/types/PlayerTypes';

export type Player = {
  type: 'player' | 'cpu';
  token: ValidTokens;
  score: number;
};

export type GameState = {
  gameStarted: boolean;
  currentPlayer: ValidTokens;
  winningPlayer: PlayerWinPossibilities;
  playerX: Player;
  playerO: Player;
  draws: number;
  board: [ValidTokens | null, ValidTokens | null, ValidTokens | null][];
};
