import { GameBoard } from '@/lib/types/GameBoard';
import { ValidTokens } from '@/lib/types/ValidTokens';
import { AIPlayer } from '@/lib/utils/AIPlayer';
import { HumanPlayer } from '@/lib/utils/HumanPlayer';

export class Board {
  board: GameBoard;

  private _winningPositions: number[][] = [];
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

  constructor() {
    this.board = Array(3)
      .fill(null)
      .map(() => [null, null, null]);
  }

  get winningPositions() {
    return this._winningPositions;
  }

  placeMark(row: number, col: number, player: HumanPlayer | AIPlayer): void {
    this.board[row][col] = player.token;
  }

  hasWin(row: number, col: number, player: HumanPlayer | AIPlayer): boolean {
    this._winningPositions = this.getWinningPositions(row, col, player);
    return this._winningPositions.some((winningPositionArr) => winningPositionArr.length !== 0);
  }

  isBoardFull(): boolean {
    for (const row of this.board) {
      if (row.some((value) => value === null)) {
        return false;
      }
    }

    return true;
  }

  private getWinningPositions(
    row: number,
    col: number,
    player: HumanPlayer | AIPlayer
  ): number[][] {
    const winningPositions = [
      ...this.getHorizontalWin(row, player),
      ...this.getVerticalWin(col, player),
      ...this.getDiagonalWin(player),
    ];

    if (winningPositions.length > 0) return winningPositions;
    else return [];
  }

  private getHorizontalWin(row: number, player: HumanPlayer | AIPlayer): number[][] {
    if (this.board[row].every((value) => value === player.token)) {
      return this.board[row].map((_, col) => [row, col]);
    }

    return [];
  }

  private getVerticalWin(col: number, player: HumanPlayer | AIPlayer): number[][] {
    const isVerticalWin = this.board
      .reduce((acc, _, row) => [...acc, this.board[row][col]], [] as (ValidTokens | null)[])
      .every((colToken) => player.token === colToken);

    if (isVerticalWin) {
      return this.board.reduce((acc, _, row) => [...acc, [row, col]], [] as number[][]);
    }

    return [];
  }

  private getDiagonalWin(player: HumanPlayer | AIPlayer): number[][] {
    for (const diagonal of this._diagonalPositions) {
      const diagonalValues = diagonal.reduce(
        (acc, currentDiagonal) => [...acc, this.board[currentDiagonal[0]][currentDiagonal[1]]],
        [] as (ValidTokens | null)[]
      );

      if (diagonalValues.every((diagonalValue) => player.token === diagonalValue)) {
        return diagonal;
      }
    }

    return [];
  }
}
