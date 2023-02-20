import { GameBoard } from '@/lib/types/GameBoard';
import { ValidTokens } from '@/lib/types/ValidTokens';

export class Board {
  board: GameBoard = Array(3)
    .fill(null)
    .map(() => [null, null, null]);

  private _winningPositions: number[][] = [];
  private _hasWin = false;
  private _hasDraw = false;
  private _winningToken: ValidTokens | null = null;
  private _diagonalPositions = [
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  private _allowRemovable = false;

  constructor(boardCells?: GameBoard, allowRemovable?: boolean) {
    if (boardCells) {
      this.board = JSON.parse(JSON.stringify(boardCells));
    }

    if (allowRemovable) {
      this._allowRemovable = allowRemovable;
    }
  }

  get winningPositions() {
    return this._winningPositions;
  }

  get hasWin() {
    return this._hasWin;
  }

  get hasDraw() {
    return this._hasDraw;
  }

  get winningToken(): ValidTokens | null {
    return this._winningToken;
  }

  placeToken(row: number, col: number, playerMark: ValidTokens): void {
    this.board[row][col] = playerMark;
    this.determineWin(row, col, playerMark);
  }

  removeToken(row: number, col: number) {
    if (!this._allowRemovable) {
      throw new Error('Removal of tokens is not allowed');
    }

    this.board[row][col] = null;
    this._hasWin = false;
    this._hasDraw = false;
  }

  private determineWin(row: number, col: number, playerToken: ValidTokens) {
    this._winningPositions = this.getWinningPositions(row, col, playerToken);
    this._hasWin = this._winningPositions.some(
      (winningPositionArr) => winningPositionArr.length !== 0
    );

    if (this._hasWin) this._winningToken = playerToken;

    if (!this._hasWin && this.isBoardFull()) {
      this._hasDraw = true;
    }
  }

  private isBoardFull(): boolean {
    for (const row of this.board) {
      if (row.some((value) => value === null)) {
        return false;
      }
    }

    return true;
  }

  private getWinningPositions(row: number, col: number, playerToken: ValidTokens): number[][] {
    const winningPositions = [
      ...this.getHorizontalWin(row, playerToken),
      ...this.getVerticalWin(col, playerToken),
      ...this.getDiagonalWin(playerToken),
    ];

    if (winningPositions.length > 0) return winningPositions;
    else return [];
  }

  private getHorizontalWin(row: number, playerToken: ValidTokens): number[][] {
    if (this.board[row].every((value) => value === playerToken)) {
      return this.board[row].map((_, col) => [row, col]);
    }

    return [];
  }

  private getVerticalWin(col: number, playerToken: ValidTokens): number[][] {
    const isVerticalWin = this.board
      .reduce((acc, _, row) => [...acc, this.board[row][col]], [] as (ValidTokens | null)[])
      .every((colToken) => playerToken === colToken);

    if (isVerticalWin) {
      return this.board.reduce((acc, _, row) => [...acc, [row, col]], [] as number[][]);
    }

    return [];
  }

  private getDiagonalWin(playerToken: ValidTokens): number[][] {
    for (const diagonal of this._diagonalPositions) {
      const diagonalValues = diagonal.reduce(
        (acc, currentDiagonal) => [...acc, this.board[currentDiagonal[0]][currentDiagonal[1]]],
        [] as (ValidTokens | null)[]
      );

      if (diagonalValues.every((diagonalValue) => playerToken === diagonalValue)) {
        return diagonal;
      }
    }

    return [];
  }
}
