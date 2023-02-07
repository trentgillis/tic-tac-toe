import { ValidTokens } from '@/lib/types/ValidTokens';

export type Player = {
  type: 'player' | 'cpu';
  token: ValidTokens;
};

export type GameState = {
  gameStarted: boolean;
  currentPlayer: ValidTokens;
  playerX: Player | null;
  playerO: Player | null;
  board: [ValidTokens | null, ValidTokens | null, ValidTokens | null][];
};
