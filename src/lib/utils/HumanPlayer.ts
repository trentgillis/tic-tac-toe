import { ValidTokens } from '../types/ValidTokens';
import { Player } from './Player';

export class HumanPlayer extends Player {
  readonly winMessage: string;
  readonly playerName: string;
  readonly playerShortName: string;

  constructor(
    token: ValidTokens,
    score: number,
    playerName: string,
    playerShortName: string,
    winMessage?: string
  ) {
    super(token, score);
    this.playerName = playerName;
    this.winMessage = winMessage || `${playerName} wins!`;
    this.playerShortName = playerShortName;
  }
}
