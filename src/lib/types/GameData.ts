import { ValidTokens } from '@/lib/types/ValidTokens';

export type Player = {
  type: 'player' | 'cpu';
  token: ValidTokens;
};

export type GameData = {
  gameStarted: boolean;
  playerTurn: ValidTokens;
  playerX: Player | null;
  playerO: Player | null;
  board: [ValidTokens | null, ValidTokens | null, ValidTokens | null][] | null;
};
