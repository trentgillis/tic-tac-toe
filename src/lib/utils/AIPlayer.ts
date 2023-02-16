import { ValidTokens } from '../types/ValidTokens';
import { Player } from './Player';

export class AIPlayer extends Player {
  constructor(token: ValidTokens, score: number = 0) {
    super(token, score);
  }

  getWinMessage(): string {
    return 'on no, you lost...';
  }

  getBestMove() {
    // TODO: NOOP
  }

  minimax() {
    // TODO: NOOP
  }

  evaluate() {
    // TODO: NOOP
  }
}
