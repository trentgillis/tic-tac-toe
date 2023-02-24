import { ValidTokens } from '../types/ValidTokens';
import { Player } from './Player';

export class HumanPlayer extends Player {
  constructor(
    token: ValidTokens,
    score: number,
    playerName: string,
    playerShortName: string,
    winMessage?: string
  ) {
    winMessage = winMessage || `${playerName} wins!`;

    super(token, score, playerName, playerShortName, winMessage);
  }
}
