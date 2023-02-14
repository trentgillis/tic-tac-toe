import { ValidTokens } from '../types/ValidTokens';

export class Player {
  token: ValidTokens;
  score: number;

  constructor(token: ValidTokens, score: number = 0) {
    this.token = token;
    this.score = score;
  }

  getWinMessage() {
    return 'You won!';
  }

  getLossMessage() {
    return 'Oh no... you lost...';
  }
}
