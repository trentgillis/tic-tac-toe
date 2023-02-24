import { ValidTokens } from '../types/ValidTokens';

export class Player {
  private _score: number;
  readonly token: ValidTokens;
  readonly playerName: string;
  readonly playerShortName: string;
  readonly winMessage: string;

  constructor(
    token: ValidTokens,
    score: number,
    playerName: string,
    playerShortName: string,
    winMessage: string
  ) {
    this.token = token;
    this._score = score;
    this.playerName = playerName;
    this.playerShortName = playerShortName;
    this.winMessage = winMessage;
  }

  get score() {
    return this._score;
  }

  updateScore() {
    this._score += 1;
  }
}
