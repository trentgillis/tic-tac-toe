import { ValidTokens } from '../types/ValidTokens';
import { Player } from './Player';

export class HumanPlayer extends Player {
  playerName: 'Player 1' | 'Player 2' | undefined;

  constructor(token: ValidTokens, score: number, playerName?: 'Player 1' | 'Player 2') {
    super(token, score);
    this.playerName = playerName;
  }

  getWinMessage(): string {
    return `${this.playerName} wins!`;
  }
}
