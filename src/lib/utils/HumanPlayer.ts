import { ValidTokens } from '../types/ValidTokens';
import { Player } from './Player';

export class HumanPlayer extends Player {
  readonly winMessage: string;
  readonly playerName: 'Player 1' | 'Player 2' | undefined;
  readonly playerShortName: string;

  constructor(
    token: ValidTokens,
    score: number,
    playerName: 'Player 1' | 'Player 2',
    playerShortName: string,
    winMessage?: string
  ) {
    super(token, score);
    this.playerName = playerName;
    this.winMessage = winMessage || `${playerName} wins!`;
    this.playerShortName = playerShortName;
  }

  getWinMessage(): string {
    return this.winMessage;
  }
}
