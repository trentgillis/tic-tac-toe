import { ValidTokens } from '../types/ValidTokens';
import { Player } from './Player';

export class AIPlayer extends Player {
  readonly playerShortName: string = 'AI';

  constructor(token: ValidTokens, score: number = 0) {
    super(token, score);
  }

  getWinMessage(): string {
    return 'on no, you lost...';
  }

  getBestMove(): [number, number] {
    // TODO: NOOP

    return [0, 0];
  }

  minimax() {
    // TODO: NOOP
  }

  evaluate() {
    // TODO: NOOP
  }
}
