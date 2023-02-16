import { ValidTokens } from '../types/ValidTokens';
import { Player } from './Player';

export class HumanPlayer extends Player {
  winMessage: string;
  playerName: 'Player 1' | 'Player 2' | undefined;

  constructor(
    token: ValidTokens,
    score: number,
    playerName?: 'Player 1' | 'Player 2',
    winMessage?: string
  ) {
    super(token, score);
    this.playerName = playerName;
    this.winMessage = winMessage || `${playerName} wins!`;
  }

  getWinMessage(): string {
    return this.winMessage;
  }
}
